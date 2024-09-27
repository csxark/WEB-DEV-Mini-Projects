const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const target_id = event.target.id;
        switch (target_id) {
            case "grey":
                body.style.backgroundColor = target_id;
                body.style.color = 'yellow'
                break;
            case "white":
                body.style.backgroundColor = target_id;
                body.style.color = 'black'
                break;
            case "blue":
                body.style.backgroundColor = target_id;
                body.style.color = 'orange'
                break;
            case "yellow":
                body.style.backgroundColor = target_id;
                body.style.color = 'black'
                break;
            case "red":
                body.style.backgroundColor = target_id;
                body.style.color = 'white'
                break;
            case "green":
                body.style.backgroundColor = target_id;
                body.style.color = 'white'
                break;
            case "aqua":
                body.style.backgroundColor = target_id;
                body.style.color = 'black'
                break;
            case "black":
                body.style.backgroundColor = target_id;
                body.style.color = 'white'
                break;
            default:
                break;
        }
    })
});

