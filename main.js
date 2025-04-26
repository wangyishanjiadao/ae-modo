document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidebar nav a');
    const contentBlocks = document.querySelectorAll('.content-block');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetContent = this.getAttribute('data-content');

            // 隐藏所有内容块
            contentBlocks.forEach(block => {
                block.style.display = 'none';
            });

            // 显示目标内容块
            const targetBlock = document.getElementById(`${targetContent}-content`);
            if (targetBlock) {
                targetBlock.style.display = 'block';
            }
        });
    });
});