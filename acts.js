<script>
  const btn = document.querySelector('.hamburger');
  const menu = document.getElementById('menu');

  btn.onclick = () => {
    menu.style.display =
      menu.style.display === 'block' ? 'none' : 'block';
  };
</script>
