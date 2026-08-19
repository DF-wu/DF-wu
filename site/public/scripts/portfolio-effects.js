(() => {
  document.documentElement.setAttribute('data-enhanced', '');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progress = document.querySelector('[data-reading-progress]');
  const commandDialog = document.querySelector('[data-command-dialog]');
  const apiDialog = document.querySelector('[data-api-dialog]');
  const stylesDialog = document.querySelector('[data-styles-dialog]');
  const commandInput = document.querySelector('[data-command-input]');
  const commandResults = document.querySelector('[data-command-results]');
  const apiPreview = document.querySelector('[data-api-preview]');
  const commandScript = document.getElementById('portfolio-command-data');
  const commandData = commandScript ? JSON.parse(commandScript.textContent || '[]') : [];

  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    progress.style.transform = `scaleX(${ratio})`;
  };

  const openDialog = (dialog) => {
    if (!dialog) return;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  };

  const renderCommands = (query = '') => {
    if (!commandResults) return;
    const normalized = query.trim().toLowerCase();
    const items = commandData
      .filter((item) => !normalized || `${item.type} ${item.title} ${item.summary}`.toLowerCase().includes(normalized))
      .slice(0, 12);

    commandResults.innerHTML = items
      .map(
        (item) => `
          <a href="${item.url}" data-command-result>
            <span>${item.type}</span>
            <strong>${item.title}</strong>
            <small>${item.summary}</small>
          </a>
        `,
      )
      .join('') || '<p class="empty-state">No matching portfolio signal.</p>';
  };

  const setApiPreview = (value) => {
    if (!apiPreview) return;
    apiPreview.textContent = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
  };

  document.addEventListener('click', async (event) => {
    const tool = event.target.closest('[data-tool]');
    if (tool) {
      const action = tool.getAttribute('data-tool');
      if (action === 'search') {
        renderCommands();
        openDialog(commandDialog);
        setTimeout(() => commandInput?.focus(), 20);
      }
      if (action === 'api') openDialog(apiDialog);
      if (action === 'styles') openDialog(stylesDialog);
      if (action === 'theme') {
        document.documentElement.toggleAttribute('data-contrast');
        localStorage.setItem('portfolio-contrast', document.documentElement.hasAttribute('data-contrast') ? '1' : '0');
      }
      if (action === 'top') window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    }

    const apiButton = event.target.closest('[data-api-endpoint]');
    if (apiButton) {
      const endpoint = apiButton.getAttribute('data-api-endpoint');
      setApiPreview({ loading: endpoint });
      try {
        const response = await fetch(endpoint);
        setApiPreview(await response.json());
      } catch (error) {
        setApiPreview({ error: 'Endpoint preview failed', detail: String(error) });
      }
    }

    if (event.target.closest('[data-live-github]')) {
      setApiPreview({ loading: 'https://api.github.com/users/DF-wu' });
      try {
        const response = await fetch('https://api.github.com/users/DF-wu');
        const data = await response.json();
        setApiPreview({
          login: data.login,
          publicRepos: data.public_repos,
          followers: data.followers,
          updatedAt: data.updated_at,
          source: 'GitHub public REST API',
        });
      } catch (error) {
        setApiPreview({ error: 'GitHub API unavailable', detail: String(error) });
      }
    }

    const filterButton = event.target.closest('[data-filter-button]');
    if (filterButton) {
      const category = filterButton.getAttribute('data-filter-button');
      document.querySelectorAll('[data-filter-button]').forEach((button) => button.toggleAttribute('aria-pressed', button === filterButton));
      document.querySelectorAll('[data-insight-card]').forEach((card) => {
        const visible = category === 'All' || card.getAttribute('data-category') === category;
        card.toggleAttribute('hidden', !visible);
      });
    }
  });

  commandInput?.addEventListener('input', () => renderCommands(commandInput.value));
  commandResults?.addEventListener('click', (event) => {
    if (event.target.closest('[data-command-result]')) commandDialog?.close();
  });

  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      renderCommands();
      openDialog(commandDialog);
      setTimeout(() => commandInput?.focus(), 20);
    }
  });

  if (localStorage.getItem('portfolio-contrast') === '1') {
    document.documentElement.setAttribute('data-contrast', '');
  }

  if (!reducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.toggleAttribute('data-visible', entry.isIntersecting));
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll('.portfolio-intel article, .portfolio-intel .intel-heading').forEach((item) => observer.observe(item));
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
  renderCommands();
})();
