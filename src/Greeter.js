
import msg from './msg.json'
import styles from './assets/greeter.css'

// console.log(styles)


export default () => {
    let greet = document.createElement('div');

    greet.textContent = msg.greet;
    greet.className = styles.greet;

    return greet;
}

