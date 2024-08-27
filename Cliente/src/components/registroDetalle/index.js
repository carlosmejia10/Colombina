import React from 'react';
import { Bell, User, ChevronDown, FileText, Calendar, BarChart2, Mail, Clock, FileCheck, Send, CalendarCheck } from 'lucide-react';

const iconStyle = { color: '#4A5568', width: '24px', height: '24px' };

 const RegistroDetalle = () => {
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
          <h1 style={styles.title}>REGISTRO N° 8745F2066</h1>
          <div style={styles.headerIcons}>
            <Clock style={iconStyle} />
            <FileCheck style={iconStyle} />
            <Send style={iconStyle} />
            <CalendarCheck style={iconStyle} />
            <Bell style={iconStyle} />
            <User style={iconStyle} />
          </div>
        </header>

        {/* Content */}
        <div style={styles.content}>
          <div style={styles.leftContent}>
            <div style={styles.pendientesSection}>
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>Pendientes</h2>
                <ChevronDown style={iconStyle} />
              </div>
              <div style={styles.sectionContent}>
                <PendienteItem 
                  title="Aprobacion de INVIMA" 
                  date="20/08/24" 
                  status="Pendiente..." 
                  statusColor="#E53E3E"
                />
                <PendienteItem 
                  title="Consolidacion de Tramite" 
                  date="20/08/24" 
                  status="Concluido el 20/08/24" 
                  statusColor="#718096"
                />
                <PendienteItem 
                  title="Revision de documentacion" 
                  date="17/08/24" 
                  status="Concluido el 19/08/24" 
                  statusColor="#718096"
                />
                <PendienteItem 
                  title="Apertura de tramite" 
                  date="07/08/24" 
                  status="Concluido el 08/08/24" 
                  statusColor="#718096"
                />
              </div>
            </div>
          </div>
          <div style={styles.rightSidebar}>
            <h3 style={styles.sidebarTitle}>Estado del registro</h3>
            <p style={styles.registroNumero}>REGISTRO N° 8745F2066</p>
            <div style={styles.progressContainer}>
              <div style={styles.progressBar}></div>
            </div>
            <p style={styles.progressText}>45%</p>
            <p style={styles.dateText}>Fecha de envío del trámite: 07/08/24</p>
            <p style={styles.dateText}>Fecha de esperada de respuesta: 07/08/24</p>
            <h4 style={styles.sidebarSubtitle}>Pendientes</h4>
            <p style={styles.pendienteText}>Aprobacion INVIMA</p>
            <h4 style={styles.sidebarSubtitle}>Documentos</h4>
            <button style={styles.linkButton}>Ver documentos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PendienteItem({ title, date, status, statusColor }) {
  return (
    <div style={styles.pendienteItem}>
      <div style={styles.pendienteLeft}>
        <div style={{...styles.statusDot, backgroundColor: statusColor === '#E53E3E' ? '#ECC94B' : '#48BB78'}}></div>
        <div>
          <p style={styles.pendienteTitle}>{title}</p>
          <p style={styles.pendienteDate}>{date}</p>
        </div>
      </div>
      <p style={{...styles.pendienteStatus, color: statusColor}}>{status}</p>
    </div>
  );
}

const styles = {
  container: {
    marginTop:'10rem',
    display: 'flex',
    height: '100vh',
    backgroundColor: '#EBF8FF',
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
    backgroundColor: '#BEE3F8',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2D3748',
  },
  headerIcons: {
    display: 'flex',
    gap: '16px',
  },
  content: {
    flex: 1,
    padding: '24px',
    display: 'flex',
    gap: '24px',
  },
  leftContent: {
    flex: 1,
  },
  pendientesSection: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  sectionHeader: {
    padding: '16px',
    borderBottom: '1px solid #E2E8F0',
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
  pendienteItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  pendienteLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  statusDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
  },
  pendienteTitle: {
    fontWeight: '600',
  },
  pendienteDate: {
    fontSize: '14px',
    color: '#718096',
  },
  pendienteStatus: {
    fontSize: '14px',
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
  registroNumero: {
    fontSize: '14px',
    color: '#718096',
    marginBottom: '8px',
  },
  progressContainer: {
    height: '8px',
    backgroundColor: '#E2E8F0',
    borderRadius: '4px',
    marginBottom: '8px',
  },
  progressBar: {
    width: '45%',
    height: '100%',
    backgroundColor: '#E53E3E',
    borderRadius: '4px',
  },
  progressText: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  dateText: {
    fontSize: '14px',
    marginBottom: '4px',
  },
  sidebarSubtitle: {
    fontWeight: '600',
    marginTop: '16px',
    marginBottom: '4px',
  },
  pendienteText: {
    fontSize: '14px',
    color: '#3182CE',
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

export default RegistroDetalle;