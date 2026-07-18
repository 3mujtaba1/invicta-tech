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
      <div className={styles.bgFixed}>
        <div className={styles.overlay} />
      </div>

      <div className={styles.heroSection}>
        <div className={styles.heroGrid}>
          <div className={styles.verticalDivider} />

          {/* Mobile/tablet-only header row: logo left, Follow Us right */}
          <div className={styles.mobileHeaderRow}>
            <div className={styles.headerLogo}>
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

            <div className={styles.headerFollowUs}>
              <p className={styles.headerFollowUsLabel}>Follow Us</p>
              <div className={styles.socialRow}>
                <a
                  className={styles.headerSocialIcon}
                  href="https://www.linkedin.com/company/invicta-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
                <a
                  className={styles.headerSocialIcon}
                  href="https://www.instagram.com/invictatech.official?igsh=ZHlrbXl6N2ljYWNl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
                {/* TODO: placeholder link — replace with actual Facebook profile URL once provided */}
                <a
                  className={styles.headerSocialIcon}
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop-only logo lockup: centered in left half */}
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
            <a href="/invicta-tech.pdf" download className={styles.cta}>
              <DownloadIcon />
              DOWNLOAD COMPANY PROFILE
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerCardWrap}>
        <section className={styles.footer}>
          <div className={`${styles.footerGridItem} ${styles.gridReg}`}>
            <FooterColumn icon={<PinIcon />} heading="Registered Address">
              WeWork Rajapushpa Summit, SY. 130P &amp; 115/1P, Nanakramguda
              Rd, R.R. Dist., Financial District, Hyderabad, Telangana -
              500032
            </FooterColumn>
          </div>

          <div className={styles.footerDividerFade} />

          <div className={`${styles.footerGridItem} ${styles.gridComm}`}>
            <FooterColumn icon={<PinIcon />} heading="Communication Address">
              HINDUSTAN BLUE FIELD APARTMENT bearing Municipal No.
              9-4-116/39/B, Bal Reddy Nagar, Tolichowki, Golconda, Hyderabad,
              T.S. 500008.
            </FooterColumn>
          </div>

          <div className={styles.footerDivider} />

          <div className={`${styles.footerGridItem} ${styles.gridPhone}`}>
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
          </div>

          <div className={styles.footerDividerPhoneEmail} />

          <div className={`${styles.footerGridItem} ${styles.gridEmail}`}>
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
              <div className={styles.desktopFollowUs}>
                <p className={styles.subHeading}>Follow Us</p>
                <div className={styles.socialRow}>
                  <a
                    className={styles.socialIcon}
                    href="https://www.linkedin.com/company/invicta-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    className={styles.socialIcon}
                    href="https://www.instagram.com/invictatech.official?igsh=ZHlrbXl6N2ljYWNl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                  {/* TODO: placeholder link — replace with actual Facebook profile URL once provided */}
                  <a
                    className={styles.socialIcon}
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>
            </FooterColumn>
          </div>
        </section>
      </div>
    </main>
  );
}
