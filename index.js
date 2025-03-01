document.getElementById("choices").addEventListener("submit", function(event) {
    event.preventDefault();
    let selectedPage = document.getElementById("choice").value;
    
    if (selectedPage) {
        window.location.href = selectedPage; 
    } else {
        alert("Please select an option!");
    }
});