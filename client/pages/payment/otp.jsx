

import React from 'react';

import { IoMdLock } from 'react-icons/io';
import { MdOutlineSendToMobile } from 'react-icons/md';
import styles from '../../styles/otp.module.css';
import  Link  from 'next/link';


const Otp = () => {
  return (
    <div className={styles.containerOtp}>
      <div>
        <h2>Welcome,user</h2>
        <h2>
          <IoMdLock />
          Let&apos;s keep your account secure
        </h2>
      </div>
      <div className={styles.innerpart}>
        <div>
          <MdOutlineSendToMobile style={{ fontSize: '60px' }} />
        </div>
        <div>
          <h5>Enter the Otp we sent to (XXXXX9655)</h5>
        </div>
        <div className={styles.inputotp}>
          <input type="password" placeholder="Enter four digit OTP" />
        </div>
        <div className={styles.errorDiv}>
          <p>Didn&apos;t get a code ? </p>
          <Link href="/payment/otp" >Send Again</Link>
        </div>
        <div className={styles.errorDiv}>
          <p>Wrong number ? </p>

          <Link href="/payment/otp">Update here</Link>
        </div>
        <div className={styles.verifybtn}>
          <Link href="/payment/success">
          <button className={styles.verify}>Verify</button>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Otp;
