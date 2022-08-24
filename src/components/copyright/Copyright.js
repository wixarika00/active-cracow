import React from 'react';
import './copyright.css';
import styles from './styles.module.css';
import './sassStyle.scss';

class Copyright extends React.Component {
    render() {
        return (
            <div className="copyrightBox">
                <span className={styles.info}> Copyright &copy; {this.props.year} All Rights Reserved</span>
            </div>
        )
    }
}

export default Copyright;