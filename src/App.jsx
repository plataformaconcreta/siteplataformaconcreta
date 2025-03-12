import { useState, useEffect, useRef } from 'react'
import { 
  Container, 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  IconButton,
  useTheme,
  useMediaQuery,
  Divider,
  Stack
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

const COLORS = {
  navy: '#002B5C',
  lime: '#C5D92D',
  lightLime: '#D4E157',
  darkNavy: '#001B3D',
  lightGray: '#F8F9FA',
  mediumGray: '#546E7A',
  white: '#FFFFFF',
  cardNavy: '#0A3665',
  cardLime: '#B8CC21',
  souespiritaBg: '#C5D92D',  
  novixBg: '#FFFFFF'         
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const marcasRef = useRef(null);

  const scrollToMarcas = () => {
    marcasRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const companies = [
    {
      name: 'LOGNOW',
      logo: '/logos/lognow.svg',
      description: 'Rentabilize o seu Negócio com Serviços de Envio. Torne-se um Revendedor Autorizado de Serviços CTT, GLS e VASP.',
      color: COLORS.navy,
      highlight: 'Mais de 500 pontos de entrega em Portugal'
    },
    {
      name: 'SHIPPIX',
      logo: './logos/shippix.png',
      description: 'A sua solução de logística local no Porto e em todo o país. Serviços personalizados e eficientes para todas as suas necessidades de envio.',
      color: COLORS.lime,
      highlight: 'Entregas em 24h no Grande Porto'
    },
    {
      name: 'SOUESPIRITA',
      logo: '/logos/souespirita.svg',
      description: 'A sua loja esotérica de confiança.',
      color: COLORS.navy,
      highlight: 'Mais de 1000 produtos esotéricos'
    },
    {
      name: 'NOVIX CRM',
      logo: '/logos/novix.png',
      description: 'CRM completo para força de vendas de transportadoras.',
      color: COLORS.lime,
      highlight: 'Software Especializado para Logística'
    }
  ]

  const stats = [
    { value: '6 Anos', label: 'De Experiência' },
    { value: '4', label: 'Marcas' },
    { value: '100+', label: 'Clientes Satisfeitos' },
    { value: '1', label: 'Sede em Vila do Conde' }
  ]

  return (
    <Box sx={{ bgcolor: COLORS.lightGray, minHeight: '100vh' }}>
      {/* Header */}
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            disableGutters 
            sx={{ 
              justifyContent: 'space-between',
              minHeight: { xs: '80px', md: '100px' },
              py: 1
            }}
          >
            <Box 
              component="img" 
              src="/logos/logo.svg" 
              sx={{ 
                height: { xs: 60, md: 80 },
                width: 'auto'
              }} 
            />
            
            <Stack 
              direction="row" 
              spacing={3} 
              alignItems="center"
            >
              <Stack 
                direction="row" 
                spacing={3}
                sx={{ 
                  display: { xs: 'none', md: 'flex' }
                }}
              >
                <Box 
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: COLORS.navy,
                    '&:hover': {
                      color: COLORS.lime
                    },
                    transition: 'color 0.3s ease'
                  }}
                  component="a"
                  href="tel:+351220941891"
                >
                  <PhoneIcon sx={{ fontSize: 20 }} />
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px'
                    }}
                  >
                    +351 220 941 891
                  </Typography>
                </Box>

                <Box 
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: COLORS.navy,
                    '&:hover': {
                      color: COLORS.lime
                    },
                    transition: 'color 0.3s ease'
                  }}
                  component="a"
                  href="mailto:atendimento@plataformaconcreta.pt"
                >
                  <EmailIcon sx={{ fontSize: 20 }} />
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px'
                    }}
                  >
                    atendimento@plataformaconcreta.pt
                  </Typography>
                </Box>
              </Stack>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setMobileOpen(!mobileOpen)}
                sx={{ 
                  display: { md: 'none' },
                  color: COLORS.navy
                }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: { xs: 12, sm: 16 }, 
          pb: { xs: 8, sm: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070")', // Porto riverside image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Box 
                  sx={{ 
                    mb: 6,
                    display: 'inline-block',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    p: 2,
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Typography 
                    variant="subtitle1"
                    sx={{ 
                      color: COLORS.white,
                      fontWeight: 500,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      fontSize: '0.9rem'
                    }}
                  >
                    Grupo Empresarial Sediado no Porto
                  </Typography>
                </Box>
                
                <Typography 
                  variant="h1" 
                  className="hero-text"
                  sx={{ 
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    fontWeight: 800,
                    mb: 2,
                    position: 'relative',
                    color: COLORS.white,
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  Inovação e Tecnologia
                </Typography>
                <Typography 
                  variant="h2"
                  className="hero-text" 
                  sx={{ 
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                    fontWeight: 400,
                    mb: 4,
                    opacity: 0.9,
                    color: COLORS.white,
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  Construindo o futuro desde 2019
                </Typography>
                <Button 
                  variant="contained" 
                  size="large"
                  className="cta-button"
                  onClick={scrollToMarcas}
                  sx={{ 
                    bgcolor: COLORS.lime,
                    color: COLORS.navy,
                    '&:hover': {
                      bgcolor: COLORS.lightLime
                    },
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
                  }}
                >
                  Conheça Nossas Soluções
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        
        {/* Decorative elements */}
        <Box 
          className="decorative-circle"
          sx={{ 
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${COLORS.lime}33 0%, transparent 70%)`,
            zIndex: 1
          }} 
        />
        <Box 
          className="decorative-circle"
          sx={{ 
            position: 'absolute',
            bottom: '10%',
            right: '15%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${COLORS.lime}22 0%, transparent 70%)`,
            zIndex: 1
          }} 
        />
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: COLORS.white }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box className="stats-item" sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h3"
                    className="stat-number"
                    sx={{ 
                      fontWeight: 700, 
                      color: COLORS.navy,
                      mb: 1
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{ color: COLORS.mediumGray }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Brands Section */}
      <Box 
        ref={marcasRef}
        sx={{ 
          py: { xs: 8, sm: 12 },
          background: COLORS.lightGray
        }}
      >
        <Container maxWidth="xl">
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', sm: '2.5rem' },
              fontWeight: 700,
              color: COLORS.navy,
              mb: 2,
              textAlign: 'center'
            }}
          >
            As Nossas Marcas
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'center',
              color: COLORS.mediumGray,
              mb: 8,
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Soluções inovadoras para diferentes setores do mercado
          </Typography>

          <Grid container spacing={4}>
            {companies.map((company, index) => (
              <Grid item xs={12} sm={6} md={3} key={company.name}>
                <Card 
                  className="company-card"
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 4px 24px rgba(0, 43, 92, 0.08)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(0, 43, 92, 0.12)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: 200,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 4,
                      background: (() => {
                        switch(company.name) {
                          case 'LOGNOW':
                            return `linear-gradient(135deg, ${COLORS.cardNavy} 0%, ${COLORS.navy} 100%)`;
                          case 'SHIPPIX':
                            return COLORS.novixBg;
                          case 'SOUESPIRITA':
                            return COLORS.white;
                          case 'NOVIX CRM':
                            return `linear-gradient(135deg, ${COLORS.cardNavy} 0%, ${COLORS.navy} 100%)`;
                          default:
                            return COLORS.novixBg;
                        }
                      })(),
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '10%',
                        width: '80%',
                        height: '1px',
                        background: `linear-gradient(to right, transparent, ${COLORS.navy}20, transparent)`
                      }
                    }}
                  >
                    <img 
                      src={company.logo}
                      alt={company.name}
                      style={{ 
                        maxHeight: '60%',
                        maxWidth: '60%',
                        objectFit: 'contain',
                        transition: 'transform 0.3s ease',
                        filter: 'none'
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: `linear-gradient(to right, ${COLORS.navy}CC, ${COLORS.cardNavy}CC)`,
                        py: 1.5,
                        px: 3,
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: COLORS.white,
                          fontWeight: 500,
                          textAlign: 'center',
                          fontSize: '0.875rem',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {company.highlight}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent 
                    sx={{ 
                      flexGrow: 1, 
                      bgcolor: COLORS.white,
                      p: 3,
                      pt: 4
                    }}
                  >
                    <Typography 
                      gutterBottom 
                      variant="h6" 
                      component="h3"
                      sx={{ 
                        fontWeight: 600,
                        color: COLORS.navy,
                        mb: 2,
                        fontSize: '1.25rem',
                        letterSpacing: '0.5px',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -8,
                          left: 0,
                          width: 40,
                          height: 2,
                          background: COLORS.navy,
                          transition: 'width 0.3s ease'
                        }
                      }}
                    >
                      {company.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: COLORS.mediumGray,
                        lineHeight: 1.6,
                        fontSize: '0.95rem'
                      }}
                    >
                      {company.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          py: 6,
          bgcolor: COLORS.navy,
          color: COLORS.white,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={4}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: { xs: 'center', md: 'flex-start' },
                  gap: 2
                }}
              >
                <Box 
                  component="img" 
                  src="/logos/logo.svg" 
                  sx={{ 
                    height: { xs: 60, md: 70 },
                    width: 'auto',
                    filter: 'brightness(0) invert(1)'  // Make logo white
                  }} 
                />
                <Stack spacing={1.5}>
                  <Box 
                    component="a"
                    href="tel:+351220941891"
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      '&:hover': {
                        color: COLORS.lime
                      },
                      transition: 'color 0.2s ease'
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2">
                      +351 220 941 891
                    </Typography>
                  </Box>
                  <Box 
                    component="a"
                    href="mailto:atendimento@plataformaconcreta.pt"
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      '&:hover': {
                        color: COLORS.lime
                      },
                      transition: 'color 0.2s ease'
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2">
                      atendimento@plataformaconcreta.pt
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: 1
              }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: COLORS.lime,
                    mb: 1,
                    fontWeight: 600
                  }}
                >
                  Links Legais
                </Typography>
                <Button
                  variant="text"
                  href="https://www.livroreclamacoes.pt/Inicio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    '&:hover': {
                      color: COLORS.lime
                    },
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    width: '100%'
                  }}
                >
                  Livro de Reclamações
                </Button>
                <Button
                  variant="text"
                  href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    '&:hover': {
                      color: COLORS.lime
                    },
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    width: '100%'
                  }}
                >
                  Resolução de Litígios em Linha
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ 
                textAlign: { xs: 'center', md: 'right' },
                mt: { xs: 3, md: 0 }
              }}>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {new Date().getFullYear()} Grupo Plataforma Concreta. Todos os direitos reservados.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Decorative elements */}
        <Box 
          sx={{ 
            position: 'absolute',
            bottom: -20,
            left: -20,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${COLORS.lime}22 0%, transparent 70%)`,
            zIndex: 0
          }} 
        />
      </Box>
    </Box>
  )
}

export default App
