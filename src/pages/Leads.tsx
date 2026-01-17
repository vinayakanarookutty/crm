import React, { useState } from 'react';
import LeadStats from '../components/Leads/LeadStats';
import LeadToolbar from '../components/Leads/LeadToolbar';
import LeadTable from '../components/Leads/LeadTable';
import ManualEntryModal from '../components/Leads/ManualEntryModal';
import BulkImportModal from '../components/Leads/BulkImportModal';

const LeadsPage: React.FC = () => {
//   const [selectedLeads, setSelectedLeads] = useState<number[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);

  return (
    <div className="relative min-h-screen animate-in fade-in duration-700">
      <div className={`transition-all duration-500 ${showAddModal || showImportModal ? 'blur-md scale-[0.98] pointer-events-none' : ''}`}>
        
        <header className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Lead Management</h1>
          <p className="text-slate-500 font-medium">Capture, assign, and track your travel inquiries.</p>
        </header>

        <LeadStats />
        
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
          <LeadToolbar 
            selectedCount={3} 
            onManualAdd={() => setShowAddModal(true)}
            onImportClick={() => setShowImportModal(true)}
          />
          <LeadTable 
            // selectedLeads={selectedLeads} 
            // setSelectedLeads={setSelectedLeads} 
          />
        </div>
      </div>

      {/* Modals */}
      {showAddModal && <ManualEntryModal onClose={() => setShowAddModal(false)} />}
      {showImportModal && <BulkImportModal onClose={() => setShowImportModal(false)} />}
    </div>
  );
};

export default LeadsPage;