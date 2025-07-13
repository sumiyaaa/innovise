import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.brandInfo}>
            <div className={styles.logo}>Innovise</div>
            <p className={styles.tagline}>
              Transforming businesses with intelligent ServiceNow solutions
            </p>
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 11.4 17.9 10 16.1 10C15.2 10 14.6 10.5 14.3 11C14.2 11.2 14.1 11.5 14.1 11.9V18.5H12V9.3H14.1V10.7C14.4 10.1 15.1 9.5 16.2 9.5C18.1 9.5 18.6 10.8 18.6 12.9V18.5H18.5ZM7.2 8.2C6.5 8.2 6 7.7 6 7C6 6.3 6.5 5.8 7.2 5.8C7.9 5.8 8.4 6.3 8.4 7C8.4 7.7 7.9 8.2 7.2 8.2ZM8.4 18.5H6V9.3H8.4V18.5ZM10.1 18.5H12.1V13.4C12.1 13.2 12.1 13 12.2 12.9C12.3 12.7 12.5 12.6 12.7 12.5C12.9 12.4 13.1 12.4 13.3 12.4C13.5 12.4 13.7 12.4 13.8 12.5C14 12.6 14.1 12.7 14.2 12.9C14.3 13.1 14.3 13.3 14.3 13.5V18.5H16.3V13.3C16.3 12.1 16 11.2 15.3 10.6C14.6 10 13.7 9.7 12.6 9.7C11.6 9.7 10.8 10 10.2 10.5C9.9 10.8 9.7 11.1 9.6 11.5C9.5 11.9 9.5 12.3 9.5 12.7V18.6H10.1V18.5Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Solutions</h4>
              <ul>
                <li><Link href="/solutions/itsm">IT Service Management</Link></li>
                <li><Link href="/solutions/csm">Customer Service Management</Link></li>
                <li><Link href="/solutions/hr">HR Service Delivery</Link></li>
                <li><Link href="/solutions/security">Security Operations</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Resources</h4>
              <ul>
                <li><Link href="/resources/case-studies">Case Studies</Link></li>
                <li><Link href="/resources/whitepapers">Whitepapers</Link></li>
                <li><Link href="/resources/webinars">Webinars</Link></li>
                <li><Link href="/resources/faq">FAQ</Link></li>
              </ul>
            </div>
          </div>
          
          <div className={styles.newsletter}>
            <h4 className={styles.columnTitle}>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest insights</p>
            <form className={styles.subscribeForm}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.subscribeButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Innovise. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}