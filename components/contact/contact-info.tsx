import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@securevision.com", "support@securevision.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["123 Security Boulevard", "Tech City, TC 10001"],
  },
]

const hours = [
  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM" },
  { day: "Sunday", time: "Closed" },
  { day: "Emergency Support", time: "24/7" },
]

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {contactDetails.map((item) => (
        <div key={item.title} className="glass-card rounded-xl p-6 flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 shrink-0">
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            {item.lines.map((line) => (
              <p key={line} className="text-sm text-muted-foreground">{line}</p>
            ))}
          </div>
        </div>
      ))}

      {/* Business Hours */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">Business Hours</h3>
        </div>
        <div className="flex flex-col gap-3">
          {hours.map((item) => (
            <div key={item.day} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{item.day}</span>
              <span className={`text-sm font-medium ${item.time === "24/7" ? "text-primary" : "text-foreground"}`}>{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
