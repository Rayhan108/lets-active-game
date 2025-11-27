// src/App.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

function App() {
  return (
    <div className="p-8 flex justify-center items-center h-screen bg-gray-100 w-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome! 🎉</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Vite + shadcn/ui কাজ করছে!</p>
          <Button onClick={() => alert('Clicked!')}>
            Click Me
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App