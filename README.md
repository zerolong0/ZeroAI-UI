# ZeroAI-UI

<div align="center">

![ZeroAI-UI](https://img.shields.io/badge/ZeroAI--UI-v0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript)

**The First AI-Native Design System for the AI Era**

*Built for AI products. Powered by AI. Designed for humans.*

[Documentation](./docs) · [Components](./components) · [Examples](./examples) · [Design Language](./docs/DESIGN_LANGUAGE.md)

</div>

---

## 🎯 What is ZeroAI-UI?

**ZeroAI-UI** is the world's first design system specifically crafted for **AI-native products**. Unlike traditional UI libraries that focus on buttons and forms, ZeroAI-UI provides a complete design language for:

- **Conversational interfaces** (like ChatGPT, Claude, Cursor)
- **AI-assisted tools** (code editors, writing assistants, design tools)
- **Human-AI collaboration** (where AI and human actions need visual distinction)

### Why Not Just Use shadcn/ui?

| Feature | shadcn/ui | **ZeroAI-UI** |
|---------|-----------|---------------|
| **Philosophy** | GUI-first (traditional) | **AI-first (conversational)** |
| **Visual Language** | Single flat design | **3-layer visual system** (Human/AI/Collaboration) |
| **Components** | 60+ GUI components | **60+ GUI + 10+ AI-native components** |
| **AI Features** | ❌ None | ✅ Streaming, Thinking indicators, Confidence scores |
| **Uncertainty Handling** | ❌ Not addressed | ✅ Built-in (AI is probabilistic) |
| **Best For** | Traditional web apps | **AI products & tools** |

---

## ✨ Key Features

### 🎨 **AI-First Visual Language**

```
Traditional UI:  One visual style for everything
ZeroAI-UI:       Three distinct visual layers
```

- **Human Layer** 👤 Solid colors, crisp boundaries (for user actions)
- **AI Layer** 🤖 Gradient flows, soft glows (for AI-generated content)
- **Collaboration Layer** 🤝 Blended styles (for human-AI co-creation)

### 🧩 **AI-Native Components**

```tsx
// Not just buttons and inputs...
import {
  AIChatInput,           // Smart input with intent recognition
  AIStreamingResponse,   // Streaming text with typing effect
  AIThinkingIndicator,   // Visual "AI is thinking" animation
  ConfidenceScore,       // Display AI confidence levels
  AIContextPanel,        // Show what AI "sees"
  IntentSuggestions      // AI-powered quick actions
} from '@zeroai-ui/react'
```

### 🎭 **Built-in Uncertainty**

AI is probabilistic. Your UI should reflect that:

```tsx
<AIResponse
  confidence={0.85}      // Show confidence visually
  showThinking={true}    // Visualize AI reasoning process
  allowRegenerate={true} // Let users ask AI to try again
/>
```

### 🚀 **Framework Agnostic**

```bash
# React (ready now)
npm install @zeroai-ui/react

# Vue (coming soon)
npm install @zeroai-ui/vue

# Svelte (coming soon)
npm install @zeroai-ui/svelte
```

---

## 🎬 Quick Start

### Installation

```bash
# Create a new project
npx create-zeroai-app my-ai-app

# Or add to existing project
npm install @zeroai-ui/react
```

### Your First AI Interface (3 lines of code!)

```tsx
import { AIChatArea } from '@zeroai-ui/react'

function App() {
  return <AIChatArea
    apiKey="your-openai-key"
    model="gpt-4"
  />
}
```

That's it! You now have a fully functional AI chat interface with:
- ✅ Streaming responses
- ✅ Thinking indicators
- ✅ Copy/regenerate buttons
- ✅ Markdown rendering
- ✅ Code syntax highlighting
- ✅ Accessibility (WCAG 2.1 AAA)
- ✅ Dark mode support

---

## 🎨 Design Philosophy

### The 7 Principles

1. **AI-First Interaction** 🤖
   - Conversation is the primary interface
   - GUI is the shortcut

2. **Context-Aware Fluidity** 🌊
   - Interface adapts to context
   - Not static layouts

3. **Transparent Intelligence** 🔍
   - Show what AI is doing
   - Make reasoning visible

4. **Graceful Uncertainty** 🎲
   - AI will make mistakes
   - Design for error recovery

5. **Progressive Disclosure** 📚
   - Simple for beginners
   - Powerful for experts

6. **Human Agency** 🎯
   - AI assists, humans decide
   - Always allow override

7. **Flat & Functional** ✨
   - Flat design for human layers
   - Strategic gradients for AI layers

---

## 📚 Core Components

### AI-Native Components

| Component | Description | Status |
|-----------|-------------|--------|
| **AIChatInput** | Smart input with intent recognition | ✅ Ready |
| **AIStreamingResponse** | Stream text with typing effect | ✅ Ready |
| **AIThinkingIndicator** | Visual thinking animation | ✅ Ready |
| **ConfidenceScore** | Display AI confidence | 🚧 Beta |
| **AIContextPanel** | Show AI context | 🚧 Beta |
| **IntentSuggestions** | AI-powered suggestions | 📅 Planned |
| **MultimodalInput** | Text + Voice + Image input | 📅 Planned |

### Traditional Components (shadcn/ui compatible)

All shadcn/ui components work seamlessly:
- Button, Input, Dialog, etc.
- Just add `layer="ai"` for AI styling!

```tsx
// Human layer (solid blue)
<Button layer="human">Save</Button>

// AI layer (gradient purple)
<Button layer="ai">Generate</Button>

// Collaboration layer (blended)
<Button layer="collaboration">Co-create</Button>
```

---

## 🎯 Who Should Use ZeroAI-UI?

### ✅ Perfect For:

- **AI product builders** (ChatGPT-like interfaces)
- **AI tool developers** (code assistants, writing tools)
- **Startups** building AI-first products
- **Enterprises** adopting AI workflows
- **Designers** who want AI-specific components

### ⚠️ Maybe Not For:

- Traditional CRUD apps (use shadcn/ui)
- Marketing websites (use Tailwind)
- Mobile-only apps (use React Native)

---

## 🛣️ Roadmap

### v0.1.0 (Current) 🎯
- [x] Design system documentation
- [x] Core visual language
- [x] 5 AI components (HTML)

### v0.2.0 (Next Week) 🚀
- [ ] React component library
- [ ] Interactive documentation
- [ ] CodeSandbox examples

### v0.3.0 (Week 3) 💎
- [ ] CLI tool (`npx zeroai-ui`)
- [ ] Component generator
- [ ] Figma plugin

### v1.0.0 (Month 2) 🏆
- [ ] Vue & Svelte support
- [ ] AI-powered theming
- [ ] Component marketplace
- [ ] VS Code extension

---

## 🌟 Showcase

> Built with ZeroAI-UI? [Submit your project!](./CONTRIBUTING.md)

*(Coming soon: Screenshots of projects built with ZeroAI-UI)*

---

## 🤝 Contributing

We welcome contributions! Whether you're:
- 🎨 A designer with AI product experience
- 💻 A developer who's built AI tools
- 📝 A writer who can improve our docs
- 🐛 A tester who finds bugs

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## 📖 Documentation

- [Design Language](./docs/DESIGN_LANGUAGE.md) - Full design philosophy
- [Component API](./docs/COMPONENTS.md) - Component reference
- [Theming Guide](./docs/THEMING.md) - Customize your theme
- [Migration Guide](./docs/MIGRATION.md) - From shadcn/ui to ZeroAI-UI

---

## 💬 Community

- **Discord**: [Join our server](https://discord.gg/zeroai-ui)
- **Twitter**: [@ZeroAI_UI](https://twitter.com/zeroai_ui)
- **GitHub Discussions**: [Ask questions](https://github.com/zerolong/ZeroAI-UI/discussions)

---

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

---

## 🙏 Acknowledgments

Inspired by:
- **shadcn/ui** - For showing the power of copy-paste components
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For utility-first CSS
- **Anthropic Claude** - For AI interaction patterns

Built with ❤️ for the AI era by [@zerolong](https://github.com/zerolong)

---

<div align="center">

**⭐ Star us on GitHub if you find this useful!**

*Let's build the future of AI interfaces together.*

</div>
