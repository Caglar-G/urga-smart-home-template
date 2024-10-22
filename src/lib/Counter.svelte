<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
    sendMessageToParent()
  }

  function sendMessageToParent() {
    window.parent.postMessage('Hello from iframe', '*');
  }

  window.addEventListener('message', (event) => {
    if (event.origin !== 'http://localhost:3000') return; // Güvenlik için

    console.log('Message from parent:', event.data);
  });
  
  
</script>

<button on:click={increment}>
  count is {count}
</button>
