import { useThemeStore } from "../store/useThemeStore"

const PREVIEW_MESSAGES = [
    { id: 1, content: "Hey! How's it going?", isSent: false },
    { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
]

function SettingsPage() {
    const { theme, setTheme } = useThemeStore()
    return (
        <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl"></div>
    )
}

export default SettingsPage