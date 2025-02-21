// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
const App: React.FC = () => {
const [selectedMenu, setSelectedMenu] = useState('dashboard');
const [searchTerm, setSearchTerm] = useState('');
const [showUserMenu, setShowUserMenu] = useState(false);
const [showNotifications, setShowNotifications] = useState(false);
const [showNewDiagnosticModal, setShowNewDiagnosticModal] = useState(false);
const [showNewPatientModal, setShowNewPatientModal] = useState(false);
const [showEditPatientModal, setShowEditPatientModal] = useState(false);
const [selectedPatient, setSelectedPatient] = useState<any>(null);
const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
const [showProfile, setShowProfile] = useState(false);
const notifications = [
{
title: 'Nova Consulta Agendada',
message: 'Dr. Lucas Mendes - Cardiologia às 14:30',
time: 'Agora mesmo',
icon: 'fa-solid fa-calendar-check',
iconBg: 'bg-blue-100',
iconColor: 'text-blue-600'
},
{
title: 'Resultado de Exame',
message: 'Novo resultado disponível para Isabella Santos',
time: '30 minutos atrás',
icon: 'fa-solid fa-file-medical',
iconBg: 'bg-green-100',
iconColor: 'text-green-600'
},
{
title: 'Lembrete',
message: 'Reunião da equipe médica às 16:00',
time: '1 hora atrás',
icon: 'fa-solid fa-bell',
iconBg: 'bg-yellow-100',
iconColor: 'text-yellow-600'
}
];
const menuItems = [
{ id: 'dashboard', icon: 'fa-solid fa-chart-line', label: 'Dashboard' },
{ id: 'pacientes', icon: 'fa-solid fa-users', label: 'Pacientes' },
{ id: 'profissionais', icon: 'fa-solid fa-user-doctor', label: 'Profissionais' },
{ id: 'consultas', icon: 'fa-solid fa-calendar-check', label: 'Consultas' },
{ id: 'diagnosticos', icon: 'fa-solid fa-file-medical', label: 'Diagnósticos' },
{ id: 'configuracoes', icon: 'fa-solid fa-gear', label: 'Configurações' },
];
const pacientes = [
{ nome: 'Isabella Santos Oliveira', cpf: '123.456.789-00', nascimento: '15/03/1990', contato: '(11) 98765-4321', ultimaConsulta: '18/02/2025' },
{ nome: 'Rafael Pereira Costa', cpf: '987.654.321-00', nascimento: '22/07/1985', contato: '(11) 91234-5678', ultimaConsulta: '19/02/2025' },
{ nome: 'Mariana Almeida Silva', cpf: '456.789.123-00', nascimento: '10/11/1995', contato: '(11) 94567-8901', ultimaConsulta: '20/02/2025' },
];
const profissionais = [
{ nome: 'Dr. Lucas Mendes', especialidade: 'Cardiologia', crm: 'CRM 54321', status: 'Disponível',
foto: 'https://public.readdy.ai/ai/img_res/b09d456842bbeb6fee5a11b1a35d83ff.jpg' },
{ nome: 'Dra. Beatriz Lima', especialidade: 'Neurologia', crm: 'CRM 98765', status: 'Em consulta',
foto: 'https://public.readdy.ai/ai/img_res/0217ea2b7be44bb7f3121da16f402c79.jpg' },
];
useEffect(() => {
if (selectedMenu === 'dashboard') {
const chartElement = document.getElementById('consultasChart');
if (chartElement) {
const myChart = echarts.init(chartElement);
const option = {
animation: false,
title: {
text: 'Consultas por Especialidade',
left: 'center'
},
tooltip: {
trigger: 'item'
},
legend: {
orient: 'vertical',
left: 'left'
},
series: [
{
type: 'pie',
radius: '50%',
data: [
{ value: 35, name: 'Cardiologia' },
{ value: 25, name: 'Neurologia' },
{ value: 20, name: 'Ortopedia' },
{ value: 15, name: 'Pediatria' },
{ value: 5, name: 'Outros' }
],
emphasis: {
itemStyle: {
shadowBlur: 10,
shadowOffsetX: 0,
shadowColor: 'rgba(0, 0, 0, 0.5)'
}
}
}
]
};
myChart.setOption(option);
}
}
}, [selectedMenu]);
return (
<div className="flex h-screen bg-gray-100">
{/* Sidebar */}
<div className="w-64 bg-white shadow-lg">
<div className="p-4 border-b">
<h1 className="text-2xl font-bold text-blue-600">Clínica Saúde</h1>
</div>
<nav className="mt-4">
{menuItems.map((item) => (
<button
key={item.id}
onClick={() => setSelectedMenu(item.id)}
className={`w-full flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
selectedMenu === item.id ? 'bg-blue-50 text-blue-600' : ''
}`}
>
<i className={`${item.icon} w-6`}></i>
<span className="ml-2">{item.label}</span>
</button>
))}
</nav>
</div>
{/* Main Content */}
<div className="flex-1 overflow-auto">
{/* Header */}
<header className="bg-white shadow-sm">
<div className="flex items-center justify-between px-6 py-4">
<div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-96">
<i className="fa-solid fa-search text-gray-400"></i>
<input
type="text"
placeholder="Pesquisar..."
className="ml-2 bg-transparent border-none w-full focus:outline-none text-sm"
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>
</div>
<div className="flex items-center space-x-4">
<div className="relative">
<button
onClick={() => setShowUserMenu(!showUserMenu)}
className="flex items-center space-x-2 !rounded-button"
>
<img
src="https://public.readdy.ai/ai/img_res/9a9bee18c7e7daa14717763c25bfadef.jpg"
alt="Admin"
className="w-8 h-8 rounded-full object-cover"
/>
<span className="text-gray-700">Admin</span>
<i className="fa-solid fa-chevron-down text-gray-500 text-sm"></i>
</button>
{showUserMenu && (
<div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
<button onClick={() => {
setShowProfile(true);
setShowUserMenu(false);
}} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
<i className="fa-solid fa-user mr-2"></i>
Meu Perfil
</button>
<button onClick={() => {
setSelectedMenu('configuracoes');
setShowUserMenu(false);
}} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
<i className="fa-solid fa-gear mr-2"></i>
Configurações
</button>
<hr className="my-2" />
<a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100">
<i className="fa-solid fa-right-from-bracket mr-2"></i>
Sair
</a>
</div>
)}
</div>
<div className="relative">
<button
onClick={() => setShowNotifications(!showNotifications)}
className="relative !rounded-button"
>
<i className="fa-solid fa-bell text-gray-600"></i>
<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
</button>
{showNotifications && (
<div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
<div className="px-4 py-2 border-b">
<h3 className="font-semibold">Notificações</h3>
</div>
<div className="max-h-80 overflow-y-auto">
{notifications.map((notification, index) => (
<div key={index} className="px-4 py-3 hover:bg-gray-50 border-b last:border-b-0">
<div className="flex items-start">
<div className={`p-2 rounded-full ${notification.iconBg} mr-3`}>
<i className={`${notification.icon} ${notification.iconColor}`}></i>
</div>
<div>
<p className="font-medium">{notification.title}</p>
<p className="text-sm text-gray-500">{notification.message}</p>
<p className="text-xs text-gray-400 mt-1">{notification.time}</p>
</div>
</div>
</div>
))}
</div>
<div className="px-4 py-2 border-t">
<button className="text-blue-600 text-sm hover:text-blue-800 w-full text-center">
Ver todas as notificações
</button>
</div>
</div>
)}
</div>
</div>
</div>
</header>
{/* Dashboard Content */}
<main className="p-6">
{selectedMenu === 'dashboard' && (
<div>
<div className="grid grid-cols-4 gap-6 mb-6">
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-500">Total de Pacientes</p>
<h3 className="text-2xl font-bold">1,234</h3>
</div>
<div className="bg-blue-100 p-3 rounded-full">
<i className="fa-solid fa-users text-blue-600"></i>
</div>
</div>
</div>
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-500">Consultas Hoje</p>
<h3 className="text-2xl font-bold">28</h3>
</div>
<div className="bg-green-100 p-3 rounded-full">
<i className="fa-solid fa-calendar-check text-green-600"></i>
</div>
</div>
</div>
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-500">Profissionais Ativos</p>
<h3 className="text-2xl font-bold">45</h3>
</div>
<div className="bg-purple-100 p-3 rounded-full">
<i className="fa-solid fa-user-doctor text-purple-600"></i>
</div>
</div>
</div>
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center justify-between">
<div>
<p className="text-gray-500">Taxa de Ocupação</p>
<h3 className="text-2xl font-bold">85%</h3>
</div>
<div className="bg-orange-100 p-3 rounded-full">
<i className="fa-solid fa-chart-pie text-orange-600"></i>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-white rounded-lg shadow p-6">
<div id="consultasChart" style={{ height: '400px' }}></div>
</div>
<div className="bg-white rounded-lg shadow p-6">
<h3 className="text-lg font-semibold mb-4">Próximas Consultas</h3>
<div className="space-y-4">
{[1, 2, 3].map((_, index) => (
<div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
<div className="flex items-center space-x-4">
<div className="bg-blue-100 p-3 rounded-full">
<i className="fa-solid fa-user-doctor text-blue-600"></i>
</div>
<div>
<p className="font-semibold">Dr. Lucas Mendes</p>
<p className="text-sm text-gray-500">Cardiologia</p>
</div>
</div>
<div className="text-right">
<p className="font-semibold">14:30</p>
<p className="text-sm text-gray-500">21 Fev 2025</p>
</div>
</div>
))}
</div>
</div>
</div>
</div>
)}
{selectedMenu === 'pacientes' && (
<div className="bg-white rounded-lg shadow">
<div className="p-6 border-b">
<div className="flex justify-between items-center">
<h2 className="text-xl font-semibold">Lista de Pacientes</h2>
<button 
  onClick={() => setShowNewPatientModal(true)}
  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 !rounded-button whitespace-nowrap">
  <i className="fa-solid fa-plus mr-2"></i>
  Novo Paciente
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPF</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nascimento</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contato</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última Consulta</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
{pacientes.map((paciente, index) => (
<tr key={index}>
<td className="px-6 py-4 whitespace-nowrap">{paciente.nome}</td>
<td className="px-6 py-4 whitespace-nowrap">{paciente.cpf}</td>
<td className="px-6 py-4 whitespace-nowrap">{paciente.nascimento}</td>
<td className="px-6 py-4 whitespace-nowrap">{paciente.contato}</td>
<td className="px-6 py-4 whitespace-nowrap">{paciente.ultimaConsulta}</td>
<td className="px-6 py-4 whitespace-nowrap">
<button 
  onClick={() => {
    setSelectedPatient(paciente);
    setShowEditPatientModal(true);
  }} 
  className="text-blue-600 hover:text-blue-800 mr-3">
  <i className="fa-solid fa-edit"></i>
</button>
<button 
  onClick={() => {
    setSelectedPatient(paciente);
    setShowDeleteConfirmation(true);
  }}
  className="text-red-600 hover:text-red-800">
  <i className="fa-solid fa-trash"></i>
</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
)}
{selectedMenu === 'profissionais' && (
<div className="bg-white rounded-lg shadow">
<div className="p-6 border-b">
<div className="flex justify-between items-center">
<h2 className="text-xl font-semibold">Profissionais</h2>
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 !rounded-button whitespace-nowrap">
<i className="fa-solid fa-plus mr-2"></i>
Novo Profissional
</button>
</div>
</div>
<div className="p-6 grid grid-cols-2 gap-6">
{profissionais.map((profissional, index) => (
<div key={index} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
<img src={profissional.foto} alt={profissional.nome} className="w-16 h-16 rounded-full object-cover" />
<div className="flex-1">
<h3 className="font-semibold">{profissional.nome}</h3>
<p className="text-gray-500">{profissional.especialidade}</p>
<p className="text-sm text-gray-400">{profissional.crm}</p>
</div>
<div>
<span className={`px-3 py-1 rounded-full text-sm ${
profissional.status === 'Disponível' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
}`}>
{profissional.status}
</span>
</div>
</div>
))}
</div>
</div>
)}
{selectedMenu === 'consultas' && (
<div className="space-y-6">
<div className="bg-white rounded-lg shadow p-6">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-semibold">Agenda de Consultas</h2>
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 !rounded-button whitespace-nowrap">
<i className="fa-solid fa-plus mr-2"></i>
Nova Consulta
</button>
</div>
<div className="grid grid-cols-7 gap-4">
{Array.from({ length: 7 }).map((_, index) => (
<div key={index} className="border rounded-lg p-4">
<h3 className="font-semibold text-center mb-2">
{new Date(2025, 1, 21 + index).toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric' })}
</h3>
<div className="space-y-2">
{index === 0 && (
<>
<div className="bg-blue-50 p-2 rounded text-sm">
<p className="font-medium">09:00 - Isabella Santos</p>
<p className="text-gray-500">Dr. Lucas Mendes</p>
</div>
<div className="bg-green-50 p-2 rounded text-sm">
<p className="font-medium">14:30 - Rafael Pereira</p>
<p className="text-gray-500">Dra. Beatriz Lima</p>
</div>
</>
)}
</div>
</div>
))}
</div>
</div>
</div>
)}
{selectedMenu === 'diagnosticos' && (
<div className="space-y-6">
<div className="bg-white rounded-lg shadow p-6">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-semibold">Diagnósticos e Prontuários</h2>
<button
onClick={() => setShowNewDiagnosticModal(true)}
className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 !rounded-button whitespace-nowrap"
>
<i className="fa-solid fa-plus mr-2"></i>
Novo Diagnóstico
</button>
</div>
<div className="grid gap-6">
{[
{ paciente: 'Isabella Santos Oliveira', data: '21/02/2025', medico: 'Dr. Lucas Mendes', diagnostico: 'Hipertensão Arterial', status: 'Em tratamento' },
{ paciente: 'Rafael Pereira Costa', data: '20/02/2025', medico: 'Dra. Beatriz Lima', diagnostico: 'Enxaqueca', status: 'Concluído' },
{ paciente: 'Mariana Almeida Silva', data: '19/02/2025', medico: 'Dr. Lucas Mendes', diagnostico: 'Check-up de rotina', status: 'Aguardando exames' }
].map((item, index) => (
<div key={index} className="border rounded-lg p-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold">{item.paciente}</h3>
<p className="text-gray-500">{item.medico}</p>
<p className="text-sm text-gray-400">{item.data}</p>
</div>
<span className={`px-3 py-1 rounded-full text-sm ${
item.status === 'Concluído' ? 'bg-green-100 text-green-800' :
item.status === 'Em tratamento' ? 'bg-blue-100 text-blue-800' :
'bg-yellow-100 text-yellow-800'
}`}>
{item.status}
</span>
</div>
<div className="mt-4">
<p className="font-medium">Diagnóstico:</p>
<p className="text-gray-600">{item.diagnostico}</p>
</div>
<div className="mt-4 flex justify-end space-x-2">
<button className="text-blue-600 hover:text-blue-800">
<i className="fa-solid fa-file-pdf mr-1"></i>
PDF
</button>
<button className="text-blue-600 hover:text-blue-800">
<i className="fa-solid fa-edit mr-1"></i>
Editar
</button>
</div>
</div>
))}
</div>
</div>
</div>
)}
{selectedMenu === 'configuracoes' && (
<div className="space-y-6">
<div className="bg-white rounded-lg shadow p-6">
<h2 className="text-xl font-semibold mb-6">Configurações do Sistema</h2>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-4">
<h3 className="font-medium text-gray-700">Informações da Clínica</h3>
<div>
<label className="block text-sm font-medium text-gray-600 mb-1">Nome da Clínica</label>
<input
type="text"
className="w-full border rounded-lg px-3 py-2"
defaultValue="Clínica Saúde"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-600 mb-1">CNPJ</label>
<input
type="text"
className="w-full border rounded-lg px-3 py-2"
defaultValue="12.345.678/0001-90"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-600 mb-1">Endereço</label>
<input
type="text"
className="w-full border rounded-lg px-3 py-2"
defaultValue="Av. Paulista, 1000 - São Paulo, SP"
/>
</div>
</div>
<div className="space-y-4">
<h3 className="font-medium text-gray-700">Configurações de Sistema</h3>
<div className="space-y-2">
<label className="flex items-center space-x-2">
<input type="checkbox" className="rounded text-blue-600" defaultChecked />
<span>Enviar notificações por e-mail</span>
</label>
<label className="flex items-center space-x-2">
<input type="checkbox" className="rounded text-blue-600" defaultChecked />
<span>Enviar lembretes por SMS</span>
</label>
<label className="flex items-center space-x-2">
<input type="checkbox" className="rounded text-blue-600" defaultChecked />
<span>Backup automático diário</span>
</label>
</div>
<div className="mt-4">
<label className="block text-sm font-medium text-gray-600 mb-1">Idioma do Sistema</label>
<select className="w-full border rounded-lg px-3 py-2">
<option>Português (Brasil)</option>
<option>English</option>
<option>Español</option>
</select>
</div>
</div>
</div>
<div className="mt-6 flex justify-end space-x-3">
<button className="px-4 py-2 border rounded-lg hover:bg-gray-50 !rounded-button whitespace-nowrap">
Cancelar
</button>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 !rounded-button whitespace-nowrap">
Salvar Alterações
</button>
</div>
</div>
</div>
)}
{/* Modal de Novo Diagnóstico */}
{showNewDiagnosticModal && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
<div className="bg-white rounded-lg w-[600px] max-h-[80vh] overflow-y-auto">
<div className="p-6 border-b">
<div className="flex justify-between items-center">
<h2 className="text-xl font-semibold">Novo Diagnóstico</h2>
<button onClick={() => setShowNewDiagnosticModal(false)} className="text-gray-500 hover:text-gray-700">
<i className="fa-solid fa-times"></i>
</button>
</div>
</div>
<div className="p-6 space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Paciente</label>
<select className="w-full border rounded-lg px-3 py-2">
<option value="">Selecione o paciente</option>
<option>Isabella Santos Oliveira</option>
<option>Rafael Pereira Costa</option>
<option>Mariana Almeida Silva</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Médico Responsável</label>
<select className="w-full border rounded-lg px-3 py-2">
<option value="">Selecione o médico</option>
<option>Dr. Lucas Mendes</option>
<option>Dra. Beatriz Lima</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Data da Consulta</label>
<input type="date" className="w-full border rounded-lg px-3 py-2" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Diagnóstico</label>
<textarea className="w-full border rounded-lg px-3 py-2 h-32" placeholder="Descreva o diagnóstico..."></textarea>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
<select className="w-full border rounded-lg px-3 py-2">
<option>Em tratamento</option>
<option>Aguardando exames</option>
<option>Concluído</option>
</select>
</div>
</div>
<div className="p-6 border-t bg-gray-50 flex justify-end space-x-3">
<button onClick={() => setShowNewDiagnosticModal(false)} className="px-4 py-2 border rounded-lg hover:bg-gray-100 !rounded-button whitespace-nowrap">
Cancelar
</button>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 !rounded-button whitespace-nowrap">
Salvar Diagnóstico
</button>
</div>
</div>
</div>
)}
{/* Modal de Novo Paciente */}
{showNewPatientModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg w-[600px] max-h-[80vh] overflow-y-auto">
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Novo Paciente</h2>
          <button onClick={() => setShowNewPatientModal(false)} className="text-gray-500 hover:text-gray-700">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2" placeholder="Digite o nome completo" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2" placeholder="000.000.000-00" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
          <input type="date" className="w-full border rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contato</label>
          <input type="tel" className="w-full border rounded-lg px-3 py-2" placeholder="(00) 00000-0000" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full border rounded-lg px-3 py-2" placeholder="exemplo@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2" placeholder="Digite o endereço completo" />
        </div>
      </div>
      <div className="p-6 border-t bg-gray-50 flex justify-end space-x-3">
        <button onClick={() => setShowNewPatientModal(false)} className="px-4 py-2 border rounded-lg hover:bg-gray-100 !rounded-button whitespace-nowrap">
          Cancelar
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 !rounded-button whitespace-nowrap">
          Salvar Paciente
        </button>
      </div>
    </div>
  </div>
)}

{/* Modal de Editar Paciente */}
{showEditPatientModal && selectedPatient && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg w-[600px] max-h-[80vh] overflow-y-auto">
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Editar Paciente</h2>
          <button onClick={() => setShowEditPatientModal(false)} className="text-gray-500 hover:text-gray-700">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2" defaultValue={selectedPatient.nome} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2" defaultValue={selectedPatient.cpf} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2" defaultValue={selectedPatient.nascimento} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contato</label>
          <input type="tel" className="w-full border rounded-lg px-3 py-2" defaultValue={selectedPatient.contato} />
        </div>
      </div>
      <div className="p-6 border-t bg-gray-50 flex justify-end space-x-3">
        <button onClick={() => setShowEditPatientModal(false)} className="px-4 py-2 border rounded-lg hover:bg-gray-100 !rounded-button whitespace-nowrap">
          Cancelar
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 !rounded-button whitespace-nowrap">
          Salvar Alterações
        </button>
      </div>
    </div>
  </div>
)}

{/* Modal de Confirmação de Exclusão */}
{showDeleteConfirmation && selectedPatient && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg w-[400px]">
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-100 rounded-full p-4">
            <i className="fa-solid fa-exclamation-triangle text-red-600 text-2xl"></i>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-center mb-2">Confirmar Exclusão</h3>
        <p className="text-gray-600 text-center mb-6">
          Tem certeza que deseja excluir o paciente {selectedPatient.nome}? Esta ação não poderá ser desfeita.
        </p>
        <div className="flex justify-center space-x-3">
          <button 
            onClick={() => setShowDeleteConfirmation(false)} 
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 !rounded-button whitespace-nowrap">
            Cancelar
          </button>
          <button 
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 !rounded-button whitespace-nowrap">
            Confirmar Exclusão
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{/* Modal de Perfil */}
{showProfile && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
<div className="bg-white rounded-lg w-[800px] max-h-[80vh] overflow-y-auto">
<div className="p-6 border-b">
<div className="flex justify-between items-center">
<h2 className="text-xl font-semibold">Meu Perfil</h2>
<button onClick={() => setShowProfile(false)} className="text-gray-500 hover:text-gray-700">
<i className="fa-solid fa-times"></i>
</button>
</div>
</div>
<div className="p-6">
<div className="flex items-center space-x-6 mb-6">
<div className="relative">
<img
src="https://public.readdy.ai/ai/img_res/c8b7568554cb95818ed56d65c330d71a.jpg"
alt="Profile"
className="w-32 h-32 rounded-full object-cover"
/>
<button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
<i className="fa-solid fa-camera"></i>
</button>
</div>
<div>
<h3 className="text-2xl font-semibold">João Silva</h3>
<p className="text-gray-500">Administrador</p>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
<input type="text" className="w-full border rounded-lg px-3 py-2" defaultValue="João Silva" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
<input type="email" className="w-full border rounded-lg px-3 py-2" defaultValue="joao.silva@clinicasaude.com" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
<input type="tel" className="w-full border rounded-lg px-3 py-2" defaultValue="(11) 98765-4321" />
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
<input type="text" className="w-full border rounded-lg px-3 py-2" defaultValue="Administrador" readOnly />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Data de Admissão</label>
<input type="date" className="w-full border rounded-lg px-3 py-2" defaultValue="2024-01-15" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
<input type="password" className="w-full border rounded-lg px-3 py-2" placeholder="********" />
</div>
</div>
</div>
<div className="mt-6">
<h4 className="font-medium text-gray-700 mb-2">Notificações</h4>
<div className="space-y-2">
<label className="flex items-center space-x-2">
<input type="checkbox" className="rounded text-blue-600" defaultChecked />
<span>Receber notificações por e-mail</span>
</label>
<label className="flex items-center space-x-2">
<input type="checkbox" className="rounded text-blue-600" defaultChecked />
<span>Receber alertas do sistema</span>
</label>
</div>
</div>
</div>
<div className="p-6 border-t bg-gray-50 flex justify-end space-x-3">
<button onClick={() => setShowProfile(false)} className="px-4 py-2 border rounded-lg hover:bg-gray-100 !rounded-button whitespace-nowrap">
Cancelar
</button>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 !rounded-button whitespace-nowrap">
Salvar Alterações
</button>
</div>
</div>
</div>
)}
</main>
</div>
</div>
);
};
export default App
