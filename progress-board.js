// JavaScript for Progress Board

// Function to update progress board
function updateProgressBoard(completed, pending, overdue) {
    document.getElementById('completed-assignments').innerText = completed;
    document.getElementById('pending-assignments').innerText = pending;
    document.getElementById('overdue-assignments').innerText = overdue;

    const total = completed + pending + overdue;
    const progress = total ? (completed / total) * 100 : 0;
    const progressElement = document.getElementById('overall-progress');
    progressElement.style.width = `${progress}%`;
    progressElement.innerText = `${Math.round(progress)}%`;
}

// Example usage
updateProgressBoard(0, 0, 0);
