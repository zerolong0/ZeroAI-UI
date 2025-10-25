# Contributing to ZeroAI-UI

Thank you for your interest in contributing to ZeroAI-UI! 🎉

## 🌟 Ways to Contribute

### 1. **Design Contributions**
- Share AI product design patterns
- Propose new AI-native components
- Create theme variations
- Submit design tokens

### 2. **Code Contributions**
- Implement new components
- Fix bugs
- Improve performance
- Add tests
- Improve documentation

### 3. **Documentation**
- Write tutorials
- Improve API docs
- Translate documentation
- Create video tutorials

### 4. **Community**
- Answer questions on Discord
- Share your projects built with ZeroAI-UI
- Write blog posts
- Give talks

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- Git

### Setup

```bash
# Fork and clone the repo
git clone https://github.com/YOUR_USERNAME/ZeroAI-UI.git
cd ZeroAI-UI

# Install dependencies
pnpm install

# Start development
pnpm dev
```

## 📝 Pull Request Process

1. **Create a branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the code style (use Prettier)
   - Add tests for new features
   - Update documentation

3. **Commit with clear messages**
   ```bash
   git commit -m "feat: add AICodeEditor component"
   ```

   Use conventional commits:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation
   - `style:` Formatting
   - `refactor:` Code restructuring
   - `test:` Tests
   - `chore:` Maintenance

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Wait for review**
   - Address feedback
   - Keep PR focused and small

## 🎨 Design Guidelines

When contributing components:

1. **Follow the 3-layer system**
   - Clearly identify: Is this Human/AI/Collaboration layer?

2. **AI-native components must**
   - Handle streaming responses
   - Show thinking/loading states
   - Display confidence when applicable
   - Be accessible (WCAG 2.1 AAA)

3. **Use the design tokens**
   - Don't hardcode colors/spacing
   - Use semantic tokens

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Check coverage
pnpm test:coverage
```

## 📚 Documentation

When adding features:

1. Update relevant README
2. Add JSDoc comments
3. Create examples
4. Update TypeScript types

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Give constructive feedback
- Focus on the work, not the person

## ❓ Questions?

- **Discord**: [Join our community](https://discord.gg/zeroai-ui)
- **GitHub Discussions**: [Ask here](https://github.com/zerolong/ZeroAI-UI/discussions)
- **Email**: zerolong@example.com

---

Thank you for making ZeroAI-UI better! 🙏
