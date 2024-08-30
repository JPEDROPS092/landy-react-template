import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
       <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contato")}</Language>
              <Large to="/">{t("Conte-nos tudo")}</Large>
              <Para>{t(`Você tem alguma pergunta? Sinta-se à vontade para entrar em contato.`)}</Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t(`Vamos Conversar`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Política")}</Title>
              <Large to="/">{t("Segurança da Aplicação")}</Large>
              <Large to="/">{t("Princípios de Software")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">{t("Centro de Suporte")}</Large>
              <Large to="/">{t("Suporte ao Cliente")}</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Endereço")}</Language>
              <Para>Rancho Santa Margarita</Para>
              <Para>2131 Elk Street</Para>
              <Para>Califórnia</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Empresa")}</Title>
              <Large to="/">{t("Sobre")}</Large>
              <Large to="/">{t("Blog")}</Large>
              <Large to="/">{t("Imprensa")}</Large>
              <Large to="/">{t("Carreiras e Cultura")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Idioma")}</Label>
              <LanguageSwitchContainer>

              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo192.png"
                  aria-label="homepage"
                  width="250px"
                  height="250px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              
            <a
                href="https://www.facebook.com/MiamiconsultoriaLimpanome/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  height="36"
                  style={{ border: 0, height: 36 }}
                  src="https://img.icons8.com/fluency/48/facebook.png"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
              <a
                href="https://www.instagram.com/miamiconsultoriama/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  height="36"
                  style={{ border: 0, height: 36 }}
                  src="https://img.icons8.com/fluency/48/instagram-new.png"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
             
              
              <SocialLink
                href="https://www.linkedin.com/in/alexandre-souza-b2583484/?originalSubdomain=br"
                src="linkedin.svg"
              />

              <a
                href="https://ko-fi.com/Y8Y7H8BNJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  height="36"
                  style={{ border: 0, height: 36 }}
                  src="https://img.icons8.com/fluency/48/whatsapp.png"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
