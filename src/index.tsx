import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { renderer } from './renderer'

const app = new Hono()

// Enable CORS for frontend-backend communication
app.use('/api/*', cors())
app.use(renderer)

// Main homepage
app.get('/', (c) => {
  return c.render(
    <div>
      <div id="app"></div>
    </div>
  )
})

// Member portal (gated)
app.get('/members', (c) => {
  const token = c.req.query('token')
  const password = c.req.query('password')
  
  // Simple authentication check - in production this should be more secure
  if (!token && !password) {
    return c.html(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Members Only - Creator Academy</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link href="/static/styles.css" rel="stylesheet">
      </head>
      <body class="bg-gray-900 text-white min-h-screen flex items-center justify-center">
          <div class="max-w-md mx-auto text-center p-8">
              <div class="neumorphic-card p-8 mb-6">
                  <h1 class="text-2xl font-bold mb-4">Members Only</h1>
                  <p class="text-gray-300 mb-6">This content is not open to the public.</p>
                  <a href="/request-invite" class="primary-button">Request an Invitation</a>
              </div>
          </div>
          <script src="/static/app.js"></script>
      </body>
      </html>
    `)
  }
  
  return c.render(
    <div>
      <div id="members-app">
        <h1>Welcome to the Member Portal</h1>
        <p>Access to curriculum, tuition information, and more.</p>
      </div>
    </div>
  )
})

// Request invitation form
app.get('/request-invite', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Request Invitation - Creator Academy</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="/static/styles.css" rel="stylesheet">
    </head>
    <body class="bg-gray-900 text-white min-h-screen">
        <div class="max-w-2xl mx-auto p-8">
            <div class="neumorphic-card p-8">
                <h1 class="text-3xl font-bold mb-6">Request an Invitation</h1>
                <p class="text-gray-300 mb-8">Creator Academy is by invitation only for members of approved partner organizations.</p>
                
                <form class="space-y-6" id="invitation-form">
                    <div>
                        <label class="block text-sm font-medium mb-2">Student Name</label>
                        <input type="text" name="studentName" required class="form-input">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2">Parent/Guardian Email</label>
                        <input type="email" name="parentEmail" required class="form-input">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2">Partner Organization (if applicable)</label>
                        <input type="text" name="organization" class="form-input">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2">Brief message about your interest</label>
                        <textarea name="message" rows="4" class="form-input"></textarea>
                    </div>
                    
                    <button type="submit" class="primary-button w-full">Submit Request</button>
                </form>
                
                <div class="mt-6 text-center">
                    <a href="/" class="text-blue-400 hover:text-blue-300">← Back to Home</a>
                </div>
            </div>
        </div>
        
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

// Parent info session booking
app.get('/info-session', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Parent Info Session - Creator Academy</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="/static/styles.css" rel="stylesheet">
    </head>
    <body class="bg-gray-900 text-white min-h-screen">
        <div class="max-w-2xl mx-auto p-8">
            <div class="neumorphic-card p-8">
                <h1 class="text-3xl font-bold mb-6">Parent Info Session</h1>
                <p class="text-gray-300 mb-8">Book a 20-minute Zoom call with Luke D'Andrea to learn more about Creator Academy.</p>
                
                <div class="bg-gray-800 p-6 rounded-lg mb-8">
                    <h3 class="text-xl font-semibold mb-4">What You'll Learn:</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li>• Program structure and curriculum overview</li>
                        <li>• Success stories and student outcomes</li>
                        <li>• Admission requirements and process</li>
                        <li>• Investment and payment options</li>
                        <li>• Q&A about your student's fit</li>
                    </ul>
                </div>
                
                <form class="space-y-6" id="info-session-form">
                    <div>
                        <label class="block text-sm font-medium mb-2">Parent/Guardian Name</label>
                        <input type="text" name="parentName" required class="form-input">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2">Email Address</label>
                        <input type="email" name="email" required class="form-input">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2">Phone Number</label>
                        <input type="tel" name="phone" required class="form-input">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2">Student Name & Age</label>
                        <input type="text" name="studentInfo" required class="form-input">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2">Preferred Time (Pacific Time)</label>
                        <select name="preferredTime" required class="form-input">
                            <option value="">Select a time...</option>
                            <option value="morning">Morning (9am-12pm)</option>
                            <option value="afternoon">Afternoon (1pm-5pm)</option>
                            <option value="evening">Evening (6pm-8pm)</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="primary-button w-full">Schedule Info Session</button>
                </form>
                
                <div class="mt-6 text-center">
                    <a href="/" class="text-blue-400 hover:text-blue-300">← Back to Home</a>
                </div>
            </div>
        </div>
        
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

// Press page
app.get('/press', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Press Coverage - Creator Academy</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="/static/styles.css" rel="stylesheet">
    </head>
    <body class="bg-gray-900 text-white min-h-screen">
        <div class="max-w-4xl mx-auto p-8">
            <h1 class="text-4xl font-bold mb-8 text-center">Press Coverage</h1>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="neumorphic-card p-6 text-center">
                    <h3 class="text-xl font-semibold mb-4">Forbes</h3>
                    <p class="text-gray-300">Featured twice for entrepreneurial achievements and business innovation.</p>
                </div>
                
                <div class="neumorphic-card p-6 text-center">
                    <h3 class="text-xl font-semibold mb-4">PRWeb</h3>
                    <p class="text-gray-300">Coverage of business launches and industry insights.</p>
                </div>
                
                <div class="neumorphic-card p-6 text-center">
                    <h3 class="text-xl font-semibold mb-4">HempToday</h3>
                    <p class="text-gray-300">Industry recognition for innovative business solutions.</p>
                </div>
            </div>
            
            <div class="mt-8 text-center">
                <a href="/" class="text-blue-400 hover:text-blue-300">← Back to Home</a>
            </div>
        </div>
        
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

// API endpoints for form submissions
app.post('/api/request-invite', async (c) => {
  const body = await c.req.json()
  // In a real application, this would save to a database or send an email
  console.log('Invitation request received:', body)
  return c.json({ success: true, message: 'Request submitted successfully' })
})

app.post('/api/info-session', async (c) => {
  const body = await c.req.json()
  // In a real application, this would integrate with a calendar system
  console.log('Info session request received:', body)
  return c.json({ success: true, message: 'Info session request submitted successfully' })
})

export default app
