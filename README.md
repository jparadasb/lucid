# React Lucid

React Lucid is a library of reusable React components for building web applications. It provides a set of UI components that can be easily customized and integrated into your project.

## Installation

To use react-lucid, you can install it via npm or yarn:

```bash
npm install react-lucid
```

```bash
yarn add react-lucid
```

## Components

### Tabs

The `Tabs` component is a tabbed navigation component that allows users to switch between different panels of content.

Example usage:

```jsx
import { Tabs } from "react-lucid";

<Tabs showNavigation={true} defaultActiveTab="first">
  <Tabs.Item eventKey="first" title="First tab" icon="😭">
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illum a
      repudiandae eos excepturi dignissimos consequuntur recusandae accusamus
      amet unde dolorum blanditiis magnam, doloribus laboriosam? Exercitationem
      quidem ratione a maiores! Eveniet vitae corporis facilis voluptatem
      aliquam rem deleniti, expedita, porro exercitationem
    </p>
  </Tabs.Item>
</Tabs>;
```
