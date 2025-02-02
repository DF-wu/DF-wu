<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的 GitHub Pages</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>歡迎來到我的 GitHub Pages</h1>
    </header>
    <main>
        <p>這是我的第一個 GitHub Pages 專案！</p>
    </main>
    <footer>
        <p>© 2023 我的名字</p>
    </footer>
    <script>
        window.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('header h1');
            if (header) {
                header.textContent += ' - 技術與專案展示';
            }
        });
    </script>
</body>
</html>