
import msg from './msg.json'

export default () => {
    let greet = document.createElement('div');
    greet.textContent = msg.greet;
    return greet;
}

