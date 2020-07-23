
import msg from './msg.json'
import styles from './index.css'

export default () => {
    let greet = document.createElement('div');
    greet.className = styles.greet;
    greet.id = 'demo_02';
    greet.innerHTML = `<h1>${msg.greet}</h1><hr />`;
    return greet;
}
