import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from './banner1.module.css'

const Banner1 = (props) => {
  return (
    <div className={`${styles['banner1-container1']} ${styles[props.rootClassName] || ''}`}>
      <div className={styles['banner1-max-width']}>
        <div className={styles['banner1-container2']}>
          <h3 className={styles['banner1-text1']}>
            {props.content1 ?? (
              <Fragment>
                <span className={styles['banner1-text2']}>
                  <span>Confira nossas atualizações recentes!</span>
                </span>
              </Fragment>
            )}
          </h3>
        </div>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  rootClassName: '',
  content1: undefined,
}

Banner1.propTypes = {
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
}

export default Banner1