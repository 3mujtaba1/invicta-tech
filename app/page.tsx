import Image from "next/image";
import styles from "./page.module.css";
import FooterColumn from "./components/FooterColumn";
import {
  PinIcon,
  PhoneIcon,
  EnvelopeIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  DownloadIcon,
} from "./components/icons";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.overlay} />

      <div className={styles.heroGrid}>
        <div className={styles.verticalDivider} />

        <div className={styles.logoLockup}>
          <Image
            src="/logo.png"
            alt="Invicta-Tech logo"
            width={170}
            height={170}
            className={styles.logoIcon}
            priority
          />
          <p className={styles.wordmark}>
            <span className={styles.wordmarkInvicta}>INVICTA-</span>
            <span className={styles.wordmarkTech}>TECH</span>
          </p>
        </div>

        <div className={styles.contentBlock}>
          <p className={styles.eyebrow}>SITE MAINTENANCE</p>
          <h1 className={styles.headline}>
            <span className={styles.headlineStill}>STILL</span>
            <br />
            <span className={styles.headlineCarving}>CARVING</span>{" "}
            <span className={styles.headlineRest}>THIS SPACE</span>
          </h1>
          <p className={styles.body}>
            Our site is being reshaped, much like the space above - with
            care and no shortcuts. We&rsquo;ll be back online shortly. In
            the meantime, get to know us below.
          </p>
          {/* TODO: replace with actual PDF link once provided */}
          <a href="#" className={styles.cta}>
            <DownloadIcon />
            DOWNLOAD COMPANY PROFILE
          </a>
        </div>
      </div>

      <div className={styles.footerCardWrap}>
        <section className={styles.footer}>
          <FooterColumn icon={<PinIcon />} heading="Head Office">
            WeWork Rajapushpa Summit, SY. 130P &amp; 115/1P, Nanakramguda Rd,
            R.R. Dist., Financial District, Hyderabad, Telangana - 500032
          </FooterColumn>

          <FooterColumn icon={<PhoneIcon />} heading="Phone">
            <div className={styles.detailBlock}>
              <span className={styles.subLabel}>India</span>
              <br />
              <a href="tel:+917259613084">+91 7259613084</a>
              <br />
              <a href="tel:+919740472216">+91 9740472216</a>
            </div>
            <div className={styles.detailBlock}>
              <span className={styles.subLabel}>Saudi Arabia</span>
              <br />
              <a href="tel:+966535095453">+966 535095453</a>
            </div>
          </FooterColumn>

          <FooterColumn icon={<EnvelopeIcon />} heading="Email">
            <div className={styles.detailBlock}>
              <a
                className={styles.emailBlock}
                href="mailto:mwa@invicta-tech.com"
              >
                mwa@invicta-tech.com
              </a>
            </div>
            <p className={styles.subHeading}>Website</p>
            <div className={styles.detailBlock}>www.invicta-tech.com</div>
            <p className={styles.subHeading}>Follow Us</p>
            {/* TODO: placeholder social links — replace with actual company profile URLs once provided */}
            <div className={styles.socialRow}>
              <a
                className={styles.socialIcon}
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                className={styles.socialIcon}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                className={styles.socialIcon}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </div>
          </FooterColumn>
        </section>
      </div>
    </main>
  );
}
