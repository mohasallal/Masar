"use client"
import LoadingScreen from "@/components/loading-screen"
import ResultsScreen from "@/components/results-screen"
import Dashboard from "@/components/dashboard"
import TaskDetail from "@/components/task-detail"
import ProjectForm from "@/components/project-form"
import { useState } from 'react';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<"form" | "loading" | "results" | "dashboard" | "taskDetail">(
    "form",
  )
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)

  const handleFormSubmit = () => {
    setCurrentScreen("loading")

    // Simulate loading for 5 seconds
    setTimeout(() => {
      setCurrentScreen("results")
    }, 5000)
  }

  const handleViewSummary = () => {
    setCurrentScreen("dashboard")
  }

  const handleTaskClick = (taskId: number) => {
    setSelectedTaskId(taskId)
    setCurrentScreen("taskDetail")
  }

  const handleBackToDashboard = () => {
    setCurrentScreen("dashboard")
  }

  // Render the appropriate screen based on the current state
  switch (currentScreen) {
    case "loading":
      return <LoadingScreen />
    case "results":
      return <ResultsScreen onViewSummary={handleViewSummary} />
    case "dashboard":
      return <Dashboard onTaskClick={handleTaskClick} />
    case "taskDetail":
      return <TaskDetail onBack={handleBackToDashboard} taskId={selectedTaskId || 1} />
    case "form":
    default:
      return <ProjectForm onSubmit={handleFormSubmit} />
  }
}

