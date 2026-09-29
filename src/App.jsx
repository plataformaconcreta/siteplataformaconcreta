import {
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
  createTheme
} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

/* ------------------------------------------------------------------ */
/* Tema                                                                */
/* ------------------------------------------------------------------ */

const NAVY = '#002B5C'
const DARK_NAVY = '#001B3D'
const CARD_NAVY = '#0A3665'
const LIME = '#C5D92D'
const LINE = 'rgba(0, 43, 92, 0.10)'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: NAVY, dark: DARK_NAVY, light: CARD_NAVY, contrastText: '#FFFFFF' },
    secondary: { main: LIME, dark: '#B8CC21', light: '#D4E157', contrastText: NAVY },
    background: { default: '#FFFFFF', paper: '#FFFFFF' },
    text: { primary: '#0F1F33', secondary: '#546E7A' }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.05 },
    h2: { fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 },
    h3: { fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.2 },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 11,
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' }
        },
        sizeLarge: { paddingInline: 28, paddingBlock: 14, fontSize: '1rem' }
      }
    },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } }
  }
})

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

const CONTACT = {
  phoneDisplay: '+351 220 941 891',
  phoneHref: 'tel:+351220941891',
  email: 'atendimento@plataformaconcreta.pt',
  emailHref: 'mailto:atendimento@plataformaconcreta.pt'
}

const STATS = [
  { value: '6 Anos', label: 'De experiência' },
  { value: '500+', label: 'Pontos de entrega' },
  { value: '100+', label: 'Clientes satisfeitos' },
  { value: '1', label: 'Sede em Vila do Conde' }
]

const BRANDS = [
  {
    name: 'LOGNOW',
    tagline: 'Intelligent Logistics',
    logo: '/logos/lognow.png',
    description:
      'Rentabilize o seu Negócio com Serviços de Envio. Torne-se um Revendedor Autorizado de Serviços CTT, GLS e VASP.',
    highlight: 'Mais de 500 pontos de entrega em Portugal',
    partners: ['CTT', 'GLS', 'VASP'],
    cta: {
      label: 'Quero ser revendedor',
      href: `${CONTACT.emailHref}?subject=${encodeURIComponent('Revendedor Autorizado Lognow')}`
    }
  }
]

const LEGAL_LINKS = [
  { label: 'Livro de Reclamações', href: 'https://www.livroreclamacoes.pt/Inicio/' },
  {
    label: 'Resolução de Litígios em Linha',
    href: 'https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage'
  }
]

const GRID_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M48 0H0v48' fill='none' stroke='rgba(255,255,255,0.07)' stroke-width='1'/%3E%3C/svg%3E\")"

/* ------------------------------------------------------------------ */
/* Componentes auxiliares                                              */
/* ------------------------------------------------------------------ */

function Eyebrow({ children, light = false }) {
  return (
    <Typography
      component="p"
      sx={{
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: light ? LIME : 'primary.main',
        mb: 2
      }}
    >
      {children}
    </Typography>
  )
}

function NavLink({ href, children }) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        color: 'text.primary',
        fontWeight: 600,
        fontSize: '0.95rem',
        textDecoration: 'none',
        position: 'relative',
        py: 0.5,
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          borderRadius: 2,
          bgcolor: LIME,
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.25s ease'
        },
        '&:hover::after': { transform: 'scaleX(1)' }
      }}
    >
      {children}
    </Box>
  )
}

function ContactRow({ icon, label, value, href }) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2,
        borderRadius: 3,
        textDecoration: 'none',
        color: '#FFFFFF',
        bgcolor: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.14)',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
        '&:hover': { bgcolor: 'rgba(255,255,255,0.12)', borderColor: LIME }
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          bgcolor: LIME,
          color: NAVY,
          flexShrink: 0
        }}
      >
        {icon}
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7 }}>
          {label}
        </Typography>
        <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', sm: '1rem' }, overflowWrap: 'anywhere' }}>
          {value}
        </Typography>
      </Box>
    </Box>
  )
}

function FooterLink({ href, icon, external = false, children }) {
  return (
    <Box
      component="a"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        color: 'rgba(255,255,255,0.8)',
        textDecoration: 'none',
        fontSize: '0.95rem',
        py: 0.75,
        transition: 'color 0.2s ease',
        '&:hover': { color: LIME }
      }}
    >
      {icon}
      <span>{children}</span>
      {external && <OpenInNewIcon sx={{ fontSize: 14, opacity: 0.7 }} />}
    </Box>
  )
}

/* ------------------------------------------------------------------ */
/* Secções                                                             */
/* ------------------------------------------------------------------ */

function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        bgcolor: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${LINE}`
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ height: { xs: 72, md: 88 } }}>
          <Box component="a" href="#inicio" aria-label="Grupo Plataforma Concreta, voltar ao início" sx={{ display: 'flex' }}>
            <Box
              component="img"
              src="/logos/logo.svg"
              alt="Grupo Plataforma Concreta"
              sx={{ height: { xs: 44, md: 56 }, width: 'auto' }}
            />
          </Box>

          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, md: 3 }}>
            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <NavLink href="#marcas">Marcas</NavLink>
              <NavLink href="#contactos">Contactos</NavLink>
            </Stack>

            <Box
              component="a"
              href={CONTACT.phoneHref}
              sx={{
                display: { xs: 'none', lg: 'inline-flex' },
                alignItems: 'center',
                gap: 1,
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                '&:hover': { color: 'primary.light' }
              }}
            >
              <PhoneIcon sx={{ fontSize: 18 }} />
              {CONTACT.phoneDisplay}
            </Box>

            <Button
              href={CONTACT.emailHref}
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIcon />}
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              Fale connosco
            </Button>

            <IconButton
              href={CONTACT.phoneHref}
              aria-label="Ligar para o Grupo Plataforma Concreta"
              sx={{ display: { xs: 'inline-flex', sm: 'none' }, color: 'primary.main' }}
            >
              <PhoneIcon />
            </IconButton>
            <IconButton
              href={CONTACT.emailHref}
              aria-label="Enviar email ao Grupo Plataforma Concreta"
              sx={{ display: { xs: 'inline-flex', sm: 'none' }, color: 'primary.main' }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

function BrandSpotlight({ brand }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: -32,
          borderRadius: 8,
          background: 'radial-gradient(closest-side, rgba(197,217,45,0.28), transparent)',
          filter: 'blur(28px)'
        }}
      />
      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          p: { md: 3.5, lg: 4 },
          borderRadius: 5,
          color: '#FFFFFF',
          bgcolor: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.16)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Eyebrow light>Marca do grupo</Eyebrow>
        <Box
          sx={{
            bgcolor: '#FFFFFF',
            borderRadius: 3,
            px: 4,
            py: 5,
            display: 'flex',
            justifyContent: 'center',
            mb: 3
          }}
        >
          <Box component="img" src={brand.logo} alt={brand.name} sx={{ width: '100%', maxWidth: 280, height: 'auto' }} />
        </Box>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
          <LocalShippingOutlinedIcon sx={{ color: LIME }} />
          <Typography sx={{ fontWeight: 600 }}>{brand.highlight}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
          <Typography sx={{ fontSize: '0.85rem', opacity: 0.75, mr: 0.5 }}>Revendedor autorizado</Typography>
          {brand.partners.map((partner) => (
            <Chip
              key={partner}
              label={partner}
              size="small"
              sx={{
                bgcolor: 'rgba(255,255,255,0.10)',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            />
          ))}
        </Stack>
      </Paper>
    </Box>
  )
}

function Hero() {
  return (
    <Box
      id="inicio"
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
        bgcolor: DARK_NAVY,
        backgroundImage: `
          radial-gradient(1100px 560px at 88% -12%, rgba(197,217,45,0.20), transparent 60%),
          radial-gradient(900px 520px at -8% 112%, rgba(10,54,101,0.95), transparent 60%),
          linear-gradient(160deg, ${DARK_NAVY} 0%, ${NAVY} 55%, ${CARD_NAVY} 100%)
        `,
        pt: { xs: 9, md: 13 },
        pb: { xs: 14, md: 19 }
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: GRID_PATTERN,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 90%)'
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Chip
              className="rise"
              label="Grupo empresarial sediado no Porto · desde 2019"
              sx={{
                mb: 3.5,
                height: 'auto',
                '& .MuiChip-label': { whiteSpace: 'normal', py: 0.75, lineHeight: 1.4 },
                color: LIME,
                bgcolor: 'rgba(197,217,45,0.10)',
                border: '1px solid rgba(197,217,45,0.35)',
                letterSpacing: '0.04em',
                fontSize: '0.8rem'
              }}
            />
            <Typography
              variant="h1"
              className="rise rise-1"
              sx={{ fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.1rem' }, mb: 2.5 }}
            >
              Inovação e{' '}
              <Box component="span" sx={{ color: LIME }}>
                Tecnologia
              </Box>
            </Typography>
            <Typography
              className="rise rise-2"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.78)',
                maxWidth: 560,
                mb: 5
              }}
            >
              Construindo o futuro desde 2019, com soluções de logística e tecnologia para empresas em todo o país.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className="rise rise-3">
              <Button href="#marcas" variant="contained" color="secondary" size="large" endIcon={<ArrowForwardIcon />}>
                Conheça as nossas soluções
              </Button>
              <Button
                href={CONTACT.emailHref}
                variant="outlined"
                size="large"
                sx={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255,255,255,0.4)',
                  '&:hover': { borderColor: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.08)' }
                }}
              >
                Fale connosco
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }} className="rise rise-4">
            <BrandSpotlight brand={BRANDS[0]} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

function Stats() {
  return (
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, mt: { xs: -8, md: -10 } }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          border: `1px solid ${LINE}`,
          boxShadow: '0 30px 70px -30px rgba(0,27,61,0.45)',
          overflow: 'hidden'
        }}
      >
        <Grid container>
          {STATS.map((stat, index) => (
            <Grid
              item
              xs={6}
              md={3}
              key={stat.label}
              sx={{
                p: { xs: 3, md: 4.5 },
                textAlign: 'center',
                borderRight: {
                  xs: index % 2 === 0 ? `1px solid ${LINE}` : 'none',
                  md: index < STATS.length - 1 ? `1px solid ${LINE}` : 'none'
                },
                borderBottom: { xs: index < 2 ? `1px solid ${LINE}` : 'none', md: 'none' }
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: '1.9rem', md: '2.5rem' },
                  fontWeight: 800,
                  color: 'primary.main',
                  letterSpacing: '-0.03em',
                  lineHeight: 1
                }}
              >
                {stat.value}
              </Typography>
              <Typography sx={{ mt: 1.25, color: 'text.secondary', fontWeight: 500 }}>{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  )
}

function BrandCard({ brand }) {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 5,
        border: `1px solid ${LINE}`,
        overflow: 'hidden',
        bgcolor: '#FFFFFF',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        '&:hover': { boxShadow: '0 30px 70px -30px rgba(0,27,61,0.4)', transform: 'translateY(-4px)' }
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            bgcolor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: 5, md: 8 },
            borderRight: { md: `1px solid ${LINE}` },
            borderBottom: { xs: `1px solid ${LINE}`, md: 'none' }
          }}
        >
          <Box component="img" src={brand.logo} alt={`Logótipo ${brand.name}`} sx={{ width: '100%', maxWidth: 340, height: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={7} sx={{ p: { xs: 4, md: 6 } }}>
          <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '1.6rem', md: '1.9rem' }, color: 'primary.main' }}>
              {brand.name}
            </Typography>
            <Chip label={brand.tagline} size="small" color="secondary" />
          </Stack>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.75, mb: 3 }}>
            {brand.description}
          </Typography>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
            <CheckCircleOutlineIcon sx={{ color: 'secondary.dark' }} />
            <Typography sx={{ fontWeight: 600 }}>{brand.highlight}</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
            <Typography sx={{ color: 'text.secondary', fontWeight: 500, mr: 0.5 }}>Revendedor autorizado</Typography>
            {brand.partners.map((partner) => (
              <Chip key={partner} label={partner} variant="outlined" sx={{ borderColor: LINE, color: 'primary.main' }} />
            ))}
          </Stack>
          <Button href={brand.cta.href} variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
            {brand.cta.label}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

function Brands() {
  return (
    <Box id="marcas" component="section" sx={{ py: { xs: 10, md: 14 }, scrollMarginTop: 96, bgcolor: '#F6F8FB' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: 680, mx: 'auto', mb: { xs: 6, md: 8 } }}>
          <Eyebrow>Marcas</Eyebrow>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, color: 'primary.main', mb: 2 }}>
            As Nossas Marcas
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Soluções inovadoras para diferentes setores do mercado
          </Typography>
        </Box>
        <Stack spacing={4}>
          {BRANDS.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

function ContactBand() {
  return (
    <Box id="contactos" component="section" sx={{ py: { xs: 10, md: 12 }, scrollMarginTop: 96 }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 5,
            p: { xs: 4, md: 8 },
            color: '#FFFFFF',
            bgcolor: NAVY,
            backgroundImage: `linear-gradient(135deg, ${DARK_NAVY} 0%, ${CARD_NAVY} 100%)`
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              top: -120,
              right: -80,
              width: 360,
              height: 360,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(197,217,45,0.25) 0%, transparent 70%)'
            }}
          />
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ position: 'relative' }}>
            <Grid item xs={12} md={6}>
              <Eyebrow light>Contactos</Eyebrow>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 2 }}>
                Vamos falar sobre o seu negócio?
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 520 }}>
                Fale connosco por telefone ou email. Estamos sediados em Vila do Conde, no Porto.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <ContactRow icon={<PhoneIcon />} label="Telefone" value={CONTACT.phoneDisplay} href={CONTACT.phoneHref} />
                <ContactRow icon={<EmailIcon />} label="Email" value={CONTACT.email} href={CONTACT.emailHref} />
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <Box component="footer" sx={{ bgcolor: DARK_NAVY, color: 'rgba(255,255,255,0.8)', pt: { xs: 8, md: 10 }, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src="/logos/logo.svg"
              alt="Grupo Plataforma Concreta"
              sx={{ height: 56, width: 'auto', filter: 'brightness(0) invert(1)', mb: 2.5 }}
            />
            <Typography sx={{ maxWidth: 380, lineHeight: 1.75 }}>
              Grupo empresarial sediado no Porto. Inovação e tecnologia, construindo o futuro desde 2019.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ color: LIME, fontWeight: 700, mb: 1.5 }}>Contactos</Typography>
            <Stack alignItems="flex-start">
              <FooterLink href={CONTACT.phoneHref} icon={<PhoneIcon sx={{ fontSize: 18 }} />}>
                {CONTACT.phoneDisplay}
              </FooterLink>
              <FooterLink href={CONTACT.emailHref} icon={<EmailIcon sx={{ fontSize: 18 }} />}>
                {CONTACT.email}
              </FooterLink>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ py: 0.75, fontSize: '0.95rem' }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 18 }} />
                <span>Sede em Vila do Conde</span>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ color: LIME, fontWeight: 700, mb: 1.5 }}>Links legais</Typography>
            <Stack alignItems="flex-start">
              {LEGAL_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href} external>
                  {link.label}
                </FooterLink>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 5, borderColor: 'rgba(255,255,255,0.12)' }} />
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {year} Grupo Plataforma Concreta. Todos os direitos reservados.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Porto · Portugal
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box component="main">
        <Hero />
        <Stats />
        <Brands />
        <ContactBand />
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default App
