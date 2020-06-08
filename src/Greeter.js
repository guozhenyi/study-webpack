
import msg from './msg.json'

export default function() {
    var greet = document.createElement('div');
    greet.textContent = msg.greet;
    return greet;
}

