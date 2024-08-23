document.getElementById('addBtn').addEventListener('click', function() {
    const input = document.getElementById('item');
    if (input.value.trim()) {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.addEventListener('dblclick', function() {
            li.remove();
        });
        document.getElementById('itemList').appendChild(li);
        input.value = '';
    }
});
