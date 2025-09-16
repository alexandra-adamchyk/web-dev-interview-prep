// Task list
let tasks = [];

// Function to add a new task
function addTask() {
    let input = document.getElementById('taskInput');   // Find input field
    let text = input.value;     // Get text

        if (text === '') {      // If empty
        return;                 // Do nothing
    }

    tasks.push(text);       // Add to list
    input.value = '';       // Clear field
    showTasks();            // Show tasks
}

// Show function
function showTasks(){
    let list = document.getElementById('taskList'); // Find list
    list.innerHTML = '';        // Clear list

    for (let i = 0; i < tasks.length; i++) {    // Loop all tasks
        let li = document.createElement('li');  // Create item
        li.innerHTML = tasks [i];   // Add text

        li.onclick = function(){    // On click
            li.className = 'done';  // Make green
        };

        list.appendChild(li);   // Add to page
    } 
}


