import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaMoneyBillWave, FaTasks, FaUser, FaSignOutAlt, FaWallet, FaChartLine, FaGift, FaQuestionCircle } from 'react-icons/fa';

// Main App Component
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [balance, setBalance] = useState(1250.75);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Mobile Header */}
        <header className="bg-blue-600 text-white p-4 md:hidden">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">EarnHub</h1>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </header>

        {/* Desktop Sidebar and Mobile Menu */}
        <div className="flex">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:flex md:flex-col w-64 bg-blue-800 text-white min-h-screen">
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-8">EarnHub</h1>
              <nav>
                <SidebarLink 
                  icon={<FaHome className="mr-3" />} 
                  text="Dashboard" 
                  active={activeTab === 'dashboard'} 
                  onClick={() => setActiveTab('dashboard')}
                />
                <SidebarLink 
                  icon={<FaMoneyBillWave className="mr-3" />} 
                  text="Earn Money" 
                  active={activeTab === 'earn'} 
                  onClick={() => setActiveTab('earn')}
                />
                <SidebarLink 
                  icon={<FaTasks className="mr-3" />} 
                  text="Tasks" 
                  active={activeTab === 'tasks'} 
                  onClick={() => setActiveTab('tasks')}
                />
                <SidebarLink 
                  icon={<FaWallet className="mr-3" />} 
                  text="Withdraw" 
                  active={activeTab === 'withdraw'} 
                  onClick={() => setActiveTab('withdraw')}
                />
                <SidebarLink 
                  icon={<FaChartLine className="mr-3" />} 
                  text="Statistics" 
                  active={activeTab === 'stats'} 
                  onClick={() => setActiveTab('stats')}
                />
                <SidebarLink 
                  icon={<FaGift className="mr-3" />} 
                  text="Referral" 
                  active={activeTab === 'referral'} 
                  onClick={() => setActiveTab('referral')}
                />
                <SidebarLink 
                  icon={<FaQuestionCircle className="mr-3" />} 
                  text="Help" 
                  active={activeTab === 'help'} 
                  onClick={() => setActiveTab('help')}
                />
              </nav>
            </div>
            <div className="mt-auto p-4">
              <SidebarLink 
                icon={<FaSignOutAlt className="mr-3" />} 
                text="Logout" 
                onClick={() => console.log("Logging out...")}
              />
            </div>
          </aside>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
              <div className="fixed left-0 top-0 bottom-0 w-64 bg-blue-800 text-white p-4 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-8">EarnHub</h1>
                <nav>
                  <SidebarLink 
                    icon={<FaHome className="mr-3" />} 
                    text="Dashboard" 
                    active={activeTab === 'dashboard'} 
                    onClick={() => { setActiveTab('dashboard'); setIsMenuOpen(false); }}
                  />
                  <SidebarLink 
                    icon={<FaMoneyBillWave className="mr-3" />} 
                    text="Earn Money" 
                    active={activeTab === 'earn'} 
                    onClick={() => { setActiveTab('earn'); setIsMenuOpen(false); }}
                  />
                  <SidebarLink 
                    icon={<FaTasks className="mr-3" />} 
                    text="Tasks" 
                    active={activeTab === 'tasks'} 
                    onClick={() => { setActiveTab('tasks'); setIsMenuOpen(false); }}
                  />
                  <SidebarLink 
                    icon={<FaWallet className="mr-3" />} 
                    text="Withdraw" 
                    active={activeTab === 'withdraw'} 
                    onClick={() => { setActiveTab('withdraw'); setIsMenuOpen(false); }}
                  />
                  <SidebarLink 
                    icon={<FaChartLine className="mr-3" />} 
                    text="Statistics" 
                    active={activeTab === 'stats'} 
                    onClick={() => { setActiveTab('stats'); setIsMenuOpen(false); }}
                  />
                  <SidebarLink 
                    icon={<FaGift className="mr-3" />} 
                    text="Referral" 
                    active={activeTab === 'referral'} 
                    onClick={() => { setActiveTab('referral'); setIsMenuOpen(false); }}
                  />
                  <SidebarLink 
                    icon={<FaQuestionCircle className="mr-3" />} 
                    text="Help" 
                    active={activeTab === 'help'} 
                    onClick={() => { setActiveTab('help'); setIsMenuOpen(false); }}
                  />
                </nav>
                <div className="mt-8">
                  <SidebarLink 
                    icon={<FaSignOutAlt className="mr-3" />} 
                    text="Logout" 
                    onClick={() => { console.log("Logging out..."); setIsMenuOpen(false); }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1 p-4">
            {/* Top Navigation - Desktop */}
            <div className="hidden md:flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 capitalize">{activeTab}</h2>
              <div className="flex items-center space-x-4">
                <div className="bg-white p-2 rounded-full shadow">
                  <FaUser className="text-blue-600" />
                </div>
                <span className="font-medium">John Doe</span>
              </div>
            </div>

            {/* Content based on active tab */}
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === 'dashboard' && <Dashboard balance={balance} />}
              {activeTab === 'earn' && <EarnMoney />}
              {activeTab === 'tasks' && <Tasks />}
              {activeTab === 'withdraw' && <Withdraw balance={balance} setBalance={setBalance} />}
              {activeTab === 'stats' && <Statistics />}
              {activeTab === 'referral' && <Referral />}
              {activeTab === 'help' && <Help />}
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

// Sidebar Link Component
function SidebarLink({ icon, text, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full p-3 mb-2 rounded-lg transition-colors ${active ? 'bg-blue-600 text-white' : 'text-blue-100 hover:bg-blue-700'}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

// Dashboard Component
function Dashboard({ balance }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Welcome Back!</h3>
      
      {/* Balance Card */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 mb-6 shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm opacity-80">Available Balance</p>
            <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
          </div>
          <FaWallet className="text-4xl opacity-70" />
        </div>
        <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
          Withdraw Now
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Today's Earnings" value="$12.50" icon={<FaMoneyBillWave />} color="bg-green-100 text-green-800" />
        <StatCard title="Tasks Completed" value="8/10" icon={<FaTasks />} color="bg-purple-100 text-purple-800" />
        <StatCard title="Referral Bonus" value="$25.00" icon={<FaGift />} color="bg-orange-100 text-orange-800" />
      </div>

      {/* Recent Activities */}
      <div className="mb-6">
        <h4 className="font-medium text-lg mb-3">Recent Activities</h4>
        <div className="space-y-3">
          <ActivityItem 
            title="Completed Survey" 
            amount="+$2.50" 
            time="2 hours ago" 
            icon={<FaTasks className="text-blue-500" />} 
          />
          <ActivityItem 
            title="Referral Bonus" 
            amount="+$5.00" 
            time="Yesterday" 
            icon={<FaGift className="text-green-500" />} 
          />
          <ActivityItem 
            title="Video Ad Watched" 
            amount="+$0.50" 
            time="Yesterday" 
            icon={<FaMoneyBillWave className="text-purple-500" />} 
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ActionButton icon={<FaMoneyBillWave />} text="Earn Money" color="bg-blue-100 text-blue-600" />
        <ActionButton icon={<FaTasks />} text="Tasks" color="bg-green-100 text-green-600" />
        <ActionButton icon={<FaGift />} text="Referral" color="bg-purple-100 text-purple-600" />
        <ActionButton icon={<FaWallet />} text="Withdraw" color="bg-orange-100 text-orange-600" />
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ title, value, icon, color }) {
  return (
    <div className={`${color} p-4 rounded-lg flex items-center justify-between`}>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
      <div className="text-2xl p-2 rounded-full bg-white bg-opacity-30">
        {icon}
      </div>
    </div>
  );
}

// Activity Item Component
function ActivityItem({ title, amount, time, icon }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center">
        <div className="p-2 mr-3 bg-white rounded-full shadow">
          {icon}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>
      <span className="font-semibold">{amount}</span>
    </div>
  );
}

// Action Button Component
function ActionButton({ icon, text, color }) {
  return (
    <button className={`${color} p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition`}>
      <div className="text-2xl mb-2">{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
}

// Earn Money Component
function EarnMoney() {
  const earningMethods = [
    {
      title: "Surveys",
      description: "Complete surveys and earn money for each completed survey.",
      icon: <FaTasks className="text-blue-500 text-2xl" />,
      earnings: "$0.50 - $5.00 per survey"
    },
    {
      title: "Watch Ads",
      description: "Watch short video ads and earn money for each completed view.",
      icon: <FaMoneyBillWave className="text-green-500 text-2xl" />,
      earnings: "$0.10 - $0.50 per ad"
    },
    {
      title: "Refer Friends",
      description: "Invite friends and earn 20% of their earnings.",
      icon: <FaGift className="text-purple-500 text-2xl" />,
      earnings: "20% commission"
    },
    {
      title: "App Testing",
      description: "Test new apps and provide feedback to earn money.",
      icon: <FaChartLine className="text-orange-500 text-2xl" />,
      earnings: "$1.00 - $10.00 per test"
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Ways to Earn Money</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {earningMethods.map((method, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
            <div className="flex items-start mb-3">
              <div className="p-3 mr-4 bg-gray-100 rounded-full">
                {method.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg">{method.title}</h4>
                <p className="text-gray-600">{method.description}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm font-medium text-gray-500">Earnings:</span>
              <span className="font-semibold text-green-600">{method.earnings}</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Start Earning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Tasks Component
function Tasks() {
  const availableTasks = [
    {
      id: 1,
      title: "Complete Survey About Shopping Habits",
      reward: "$2.50",
      time: "10-15 mins",
      completed: false
    },
    {
      id: 2,
      title: "Watch a 30-second Ad Video",
      reward: "$0.30",
      time: "30 secs",
      completed: false
    },
    {
      id: 3,
      title: "Install and Test New App",
      reward: "$5.00",
      time: "5-10 mins",
      completed: true
    },
    {
      id: 4,
      title: "Answer 5 Quick Questions",
      reward: "$1.00",
      time: "2-3 mins",
      completed: false
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Available Tasks</h3>
      
      <div className="space-y-4">
        {availableTasks.map(task => (
          <div key={task.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium">{task.title}</h4>
              <span className="font-semibold text-green-600">{task.reward}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
              <span>Time: {task.time}</span>
              <span>{task.completed ? "Completed" : "Not Completed"}</span>
            </div>
            <button 
              className={`w-full py-2 rounded-lg font-medium ${task.completed ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              disabled={task.completed}
            >
              {task.completed ? "Task Completed" : "Start Task"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Withdraw Component
function Withdraw({ balance, setBalance }) {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    if (parseFloat(amount) > balance) {
      alert('Insufficient balance');
      return;
    }
    if (!email) {
      alert('Please enter your payment email');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setBalance(prev => prev - parseFloat(amount));
      setIsSubmitting(false);
      setIsSuccess(true);
      setAmount('');
    }, 1500);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Withdraw Earnings</h3>
      
      {isSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <p>Withdrawal request submitted successfully!</p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="mt-2 text-sm text-green-700 underline"
          >
            Make another withdrawal
          </button>
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-medium text-blue-800">Available Balance: ${balance.toFixed(2)}</p>
            <p className="text-sm text-blue-600">Minimum withdrawal amount: $5.00</p>
          </div>

          <form onSubmit={handleWithdraw}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="amount">
                Amount to Withdraw ($)
              </label>
              <input
                type="number"
                id="amount"
                min="5"
                max={balance}
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter amount"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-3 border rounded-lg flex items-center justify-center ${paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                >
                  <i className="fab fa-paypal mr-2 text-blue-500"></i>
                  <span>PayPal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-3 border rounded-lg flex items-center justify-center ${paymentMethod === 'bank' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                >
                  <i className="fas fa-university mr-2 text-blue-500"></i>
                  <span>Bank Transfer</span>
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                {paymentMethod === 'paypal' ? 'PayPal Email' : 'Bank Account Details'}
              </label>
              <input
                type={paymentMethod === 'paypal' ? 'email' : 'text'}
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={paymentMethod === 'paypal' ? 'your@paypal.com' : 'Account number, IBAN, etc.'}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
            >
              {isSubmitting ? 'Processing...' : 'Request Withdrawal'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

// Statistics Component
function Statistics() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Your Earnings Statistics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Weekly Earnings Chart (simplified) */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium mb-4">Weekly Earnings</h4>
          <div className="h-64 bg-gray-100 rounded flex items-end justify-between p-2">
            {[20, 45, 60, 35, 70, 50, 80].map((height, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-8 bg-blue-500 rounded-t hover:bg-blue-600 transition" 
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs mt-1 text-gray-500">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Earnings Breakdown */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium mb-4">Earnings Breakdown</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Surveys</span>
              <div className="flex items-center">
                <span className="font-medium mr-2">$45.20</span>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">65%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Video Ads</span>
              <div className="flex items-center">
                <span className="font-medium mr-2">$18.50</span>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">25%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Referrals</span>
              <div className="flex items-center">
                <span className="font-medium mr-2">$5.30</span>
                <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">7%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">App Testing</span>
              <div className="flex items-center">
                <span className="font-medium mr-2">$2.00</span>
                <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">3%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Withdrawals */}
      <div>
        <h4 className="font-medium mb-3">Recent Withdrawals</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Method</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">2023-06-15</td>
                <td className="py-3 px-4 font-medium">$50.00</td>
                <td className="py-3 px-4">PayPal</td>
                <td className="py-3 px-4 text-green-600">Completed</td>
              </tr>
              <tr className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">2023-06-01</td>
                <td className="py-3 px-4 font-medium">$30.00</td>
                <td className="py-3 px-4">Bank Transfer</td>
                <td className="py-3 px-4 text-green-600">Completed</td>
              </tr>
              <tr className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">2023-05-20</td>
                <td className="py-3 px-4 font-medium">$25.00</td>
                <td className="py-3 px-4">PayPal</td>
                <td className="py-3 px-4 text-green-600">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Referral Component
function Referral() {
  const referralLink = "https://earnhub.com/ref/user123";
  
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Referral Program</h3>
      
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-2">Invite Friends & Earn 20%</h4>
            <p className="opacity-90">For every dollar your friends earn, you get 20% as bonus!</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold mb-1">$25.00</p>
            <p className="text-sm opacity-80">Total Referral Earnings</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="font-medium mb-3">Your Referral Link</h4>
          <div className="flex">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(referralLink);
                alert('Link copied to clipboard!');
              }}
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition"
            >
              Copy
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">Share this link with your friends</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="font-medium mb-3">Share Via</h4>
          <div className="grid grid-cols-4 gap-2">
            <button className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="p-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition">
              <i className="fab fa-google"></i>
            </button>
            <button className="p-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition">
              <i className="fas fa-envelope"></i>
            </button>
            <button className="p-2 bg-green-100 text-green-600 rounded hover:bg-green-200 transition">
              <i className="fab fa-whatsapp"></i>
            </button>
            <button className="p-2 bg-pink-100 text-pink-600 rounded hover:bg-pink-200 transition">
              <i className="fab fa-instagram"></i>
            </button>
            <button className="p-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition">
              <i className="fab fa-telegram-plane"></i>
            </button>
            <button className="p-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition">
              <i className="fas fa-share-alt"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-3">Your Referrals (5)</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Joined</th>
                <th className="py-2 px-4 text-left">Earnings</th>
                <th className="py-2 px-4 text-left">Your Bonus</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">John Smith</td>
                <td className="py-3 px-4">2023-06-10</td>
                <td className="py-3 px-4">$125.00</td>
                <td className="py-3 px-4 font-medium text-purple-600">$25.00</td>
                <td className="py-3 px-4 text-green-600">Active</td>
              </tr>
              <tr className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">Sarah Johnson</td>
                <td className="py-3 px-4">2023-05-28</td>
                <td className="py-3 px-4">$80.00</td>
                <td className="py-3 px-4 font-medium text-purple-600">$16.00</td>
                <td className="py-3 px-4 text-green-600">Active</td>
              </tr>
              <tr className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">Mike Davis</td>
                <td className="py-3 px-4">2023-05-15</td>
                <td className="py-3 px-4">$45.00</td>
                <td className="py-3 px-4 font-medium text-purple-600">$9.00</td>
                <td className="py-3 px-4 text-green-600">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Help Component
function Help() {
  const faqs = [
    {
      question: "How do I earn money on EarnHub?",
      answer: "You can earn money by completing surveys, watching ads, testing apps, and referring friends. Each activity has different earning rates."
    },
    {
      question: "What is the minimum withdrawal amount?",
      answer: "The minimum withdrawal amount is $5.00 for all payment methods."
    },
    {
      question: "How long does it take to process withdrawals?",
      answer: "PayPal withdrawals are usually processed within 24 hours. Bank transfers may take 3-5 business days."
    },
    {
      question: "How does the referral program work?",
      answer: "When you refer a friend using your unique link, you'll earn 20% of their earnings as a bonus. There's no limit to how much you can earn from referrals."
    },
    {
      question: "Why was my task not approved?",
      answer: "Tasks may be rejected if they weren't completed according to the instructions or if quality checks weren't passed. Make sure to follow all instructions carefully."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Help Center</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
          <div className="text-blue-500 text-3xl mb-3">
            <i className="fas fa-question-circle"></i>
          </div>
          <h4 className="font-medium mb-2">FAQs</h4>
          <p className="text-gray-600">Find answers to common questions about using EarnHub.</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
          <div className="text-green-500 text-3xl mb-3">
            <i className="fas fa-envelope"></i>
          </div>
          <h4 className="font-medium mb-2">Contact Us</h4>
          <p className="text-gray-600">Email us at support@earnhub.com for any questions or issues.</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
          <div className="text-purple-500 text-3xl mb-3">
            <i className="fas fa-file-alt"></i>
          </div>
          <h4 className="font-medium mb-2">Terms & Privacy</h4>
          <p className="text-gray-600">Read our terms of service and privacy policy.</p>
        </div>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h4 className="font-medium mb-4">Frequently Asked Questions</h4>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-3">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="text-blue-500">
                  {activeIndex === index ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;