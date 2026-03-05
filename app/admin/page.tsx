"use client"

import { Package, Users, FileText, Eye, TrendingUp, ShieldCheck } from "lucide-react"

const stats = [
  { label: "Total Products", value: "24", icon: Package, change: "+3 this month" },
  { label: "Active Clients", value: "1,247", icon: Users, change: "+12% growth" },
  { label: "New Inquiries", value: "38", icon: FileText, change: "8 pending" },
  { label: "Website Visits", value: "5.2K", icon: Eye, change: "+18% this week" },
]

const recentInquiries = [
  { name: "John Smith", email: "john@example.com", service: "CCTV Installation", date: "2 hours ago", status: "New" },
  { name: "Emily Davis", email: "emily@example.com", service: "Maintenance", date: "5 hours ago", status: "New" },
  { name: "Mike Chen", email: "mike@example.com", service: "Remote Monitoring", date: "1 day ago", status: "Replied" },
  { name: "Sarah Wilson", email: "sarah@example.com", service: "Consultation", date: "2 days ago", status: "Replied" },
  { name: "Alex Brown", email: "alex@example.com", service: "Security Setup", date: "3 days ago", status: "Closed" },
]

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-5 w-5 text-primary" />
              <TrendingUp className="h-4 w-4 text-primary/50" />
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            <p className="text-xs text-primary mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent Inquiries */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Recent Inquiries</h3>
          <span className="text-xs text-primary font-medium">View All</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Name</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Email</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Service</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Date</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentInquiries.map((inquiry) => (
                <tr key={inquiry.email} className="hover:bg-secondary/50 transition-colors">
                  <td className="py-3 text-sm font-medium text-foreground">{inquiry.name}</td>
                  <td className="py-3 text-sm text-muted-foreground">{inquiry.email}</td>
                  <td className="py-3 text-sm text-muted-foreground">{inquiry.service}</td>
                  <td className="py-3 text-sm text-muted-foreground">{inquiry.date}</td>
                  <td className="py-3">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      inquiry.status === "New"
                        ? "bg-primary/10 text-primary"
                        : inquiry.status === "Replied"
                        ? "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {inquiry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-3">
        <button className="glass-card rounded-xl p-6 text-left hover:border-primary/40 transition-colors group">
          <Package className="h-8 w-8 text-primary mb-3" />
          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Add Product</h4>
          <p className="text-sm text-muted-foreground mt-1">Add a new security product to the catalog</p>
        </button>
        <button className="glass-card rounded-xl p-6 text-left hover:border-primary/40 transition-colors group">
          <FileText className="h-8 w-8 text-primary mb-3" />
          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Export Inquiries</h4>
          <p className="text-sm text-muted-foreground mt-1">Download customer inquiries as CSV</p>
        </button>
        <button className="glass-card rounded-xl p-6 text-left hover:border-primary/40 transition-colors group">
          <ShieldCheck className="h-8 w-8 text-primary mb-3" />
          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">System Health</h4>
          <p className="text-sm text-muted-foreground mt-1">Check website and integration status</p>
        </button>
      </div>
    </div>
  )
}
