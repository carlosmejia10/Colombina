import React from 'react';
import { Search, Bell, User, ChevronDown, FileText, Calendar, BarChart2, Mail } from 'lucide-react';

const iconStyle = { color: '#4A5568', width: '24px', height: '24px' };

const Dashboard = () => {
    return (
        <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <FileText style={iconStyle} />
        <Calendar style={iconStyle} />
        <BarChart2 style={iconStyle} />
        <Mail style={iconStyle} />
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>Tramites +</h1>
          <div style={styles.headerRight}>
            <div style={styles.searchContainer}>
              <input type="text" placeholder="Buscar" style={styles.searchInput} />
              <Search style={styles.searchIcon} />
            </div>
            <button style={styles.iconButton}><Bell /></button>
            <button style={styles.iconButton}><User /></button>
          </div>
        </header>

        {/* Content */}
        <div style={styles.content}>
          <div style={styles.leftContent}>
            <RegistroSection title="Registro Sanitario Nacional" registros={[
              { numero: '8745F2065', fecha: 'hace 2sem', estado: 'respondido' },
              { numero: '8745F2066', fecha: 'hace 2sem', estado: 'no respondido' },
              { numero: '8745F2067', fecha: '16/04/24', estado: 'respondido' },
              { numero: '8745F2068', fecha: '19/02/24', estado: 'respondido' },
            ]} />
            <RegistroSection title="Registro Sanitario Interacional" empty />
          </div>
          <div style={styles.rightSidebar}>
            <h3 style={styles.sidebarTitle}>Estado del registro</h3>
            <p style={styles.registroNumero}>REGISTRO N° 8745F2066</p>
            <div style={styles.progressContainer}>
              <div style={styles.progressBar}></div>
            </div>
            <p style={styles.progressText}>75%</p>
            <p style={styles.dateText}>Fecha de envío del trámite: 07/08/24</p>
            <p style={styles.dateText}>Fecha de esperada de respuesta: 07/08/24</p>
            <h4 style={styles.sidebarSubtitle}>Pendientes</h4>
            <p style={styles.normalText}>Sin pendientes</p>
            <h4 style={styles.sidebarSubtitle}>Documentos</h4>
            <button style={styles.linkButton}>Ver documentos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegistroSection({ title, registros, empty }) {
  return (
    <div style={styles.section}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>{title}</h2>
        <ChevronDown />
      </div>
      <div style={styles.sectionContent}>
        {empty ? (
          <p style={styles.emptyText}>Sin registros aún</p>
        ) : (
          registros.map((registro) => (
            <div key={registro.numero} style={styles.registro}>
              <div style={{
                ...styles.registroStatus,
                backgroundColor: registro.estado === 'no respondido' ? '#ECC94B' : '#48BB78'
              }}></div>
              <div>
                <p style={styles.registroNumero}>REGISTRO N° {registro.numero}</p>
                <p style={styles.registroFecha}>{registro.fecha}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#EBF8FF',
    marginTop:'10rem',
    width:'100%'
  },
  sidebar: {
    width: '64px',
    backgroundColor: '#BEE3F8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 0',
    gap: '32px',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'white',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#3182CE',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  searchContainer: {
    position: 'relative',
  },
  searchInput: {
    padding: '8px 16px 8px 40px',
    borderRadius: '9999px',
    border: '1px solid #E2E8F0',
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#A0AEC0',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    padding: '24px',
    display: 'flex',
    gap: '24px',
  },
  leftContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  sectionHeader: {
    padding: '16px',
    backgroundColor: '#BEE3F8',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
  },
  sectionContent: {
    padding: '16px',
  },
  registro: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px',
  },
  registroStatus: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
  },
  registroNumero: {
    fontWeight: '600',
  },
  registroFecha: {
    fontSize: '14px',
    color: '#718096',
  },
  emptyText: {
    color: '#718096',
  },
  rightSidebar: {
    width: '256px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  sidebarTitle: {
    fontWeight: '600',
    marginBottom: '8px',
  },
  progressContainer: {
    height: '8px',
    backgroundColor: '#E2E8F0',
    borderRadius: '4px',
    marginTop: '8px',
  },
  progressBar: {
    width: '75%',
    height: '100%',
    backgroundColor: '#48BB78',
    borderRadius: '4px',
  },
  progressText: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '8px',
  },
  dateText: {
    fontSize: '14px',
    marginTop: '4px',
  },
  sidebarSubtitle: {
    fontWeight: '600',
    marginTop: '16px',
    marginBottom: '4px',
  },
  normalText: {
    fontSize: '14px',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#3182CE',
    cursor: 'pointer',
    padding: '0',
    fontSize: '14px',
  },
};

  


export default Dashboard;