import { IDocsContentItem } from "@/types/docs";

export const docsPageContentMock: IDocsContentItem[] = [
  {
    id: "1a2b3c4d5e6f",
    content: "## **Introduction**",
    type: "h2",
    meta: null,
  },
  {
    id: "7g8h9i0j1k2",
    content:
      "Note: This edition of the book is the same as The Rust Programming Language available in print and ebook format from No Starch Press.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "3l4m5n6o7p8",
    content:
      "Welcome to *The Rust Programming Language*, an introductory book about Rust. The Rust programming language helps you write faster, more reliable software. High-level ergonomics and low-level control are often at odds in programming language design; Rust challenges that conflict. Through balancing powerful technical capacity and a great developer experience, Rust gives you the option to control low-level details (such as memory usage) without all the hassle traditionally associated with such control.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "9q0r1s2t3u4",
    content: "**Who Rust Is For**",
    type: "h2",
    meta: null,
  },
  {
    id: "5v6w7x8y9z0",
    content:
      "Rust is ideal for many people for a variety of reasons. Let’s look at a few of the most important groups.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "1a1b1c1d1e1f",
    content: "**Teams of Developers**",
    type: "h3",
    meta: null,
  },
  {
    id: "2g2h2i2j2k",
    content:
      "Rust is proving to be a productive tool for collaborating among large teams of developers with varying levels of systems programming knowledge. Low-level code is prone to various subtle bugs, which in most other languages can be caught only through extensive testing and careful code review by experienced developers. In Rust, the compiler plays a gatekeeper role by refusing to compile code with these elusive bugs, including concurrency bugs. By working alongside the compiler, the team can spend their time focusing on the program’s logic rather than chasing down bugs.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "3l3m3n3o3p",
    content: "Rust also brings contemporary developer tools to the systems programming world:",
    type: "paragraph",
    meta: null,
  },
  {
    id: "4q4r4s4t4u",
    content:
      "1. Cargo, the included dependency manager and build tool, makes adding, compiling, and managing dependencies painless and consistent across the Rust ecosystem.",
    type: "unordered_list",
    meta: null,
  },
  {
    id: "5v5w5x5y5z",
    content: "2. The Rustfmt formatting tool ensures a consistent coding style across developers.",
    type: "unordered_list",
    meta: null,
  },
  {
    id: "1a6b1c6d1e6f",
    content:
      "3. The Rust Language Server powers Integrated Development Environment (IDE) integration for code completion and inline error messages.",
    type: "unordered_list",
    meta: null,
  },
  {
    id: "2g7h2i7j2k",
    content:
      "By using these and other tools in the Rust ecosystem, developers can be productive while writing systems-level code.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "8l9m0n1o2p",
    content: "**Students**",
    type: "h3",
    meta: null,
  },
  {
    id: "3q4r5s6t7u8",
    content:
      "Rust is for students and those who are interested in learning about systems concepts. Using Rust, many people have learned about topics like operating systems development. The community is very welcoming and happy to answer student questions. Through efforts such as this book, the Rust teams want to make systems concepts more accessible to more people, especially those new to programming.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "9v0w1x2y3z4",
    content: "**Companies**",
    type: "h3",
    meta: null,
  },
  {
    id: "5a6b7c8d9e0f",
    content:
      "Hundreds of companies, large and small, use Rust in production for a variety of tasks, including command line tools, web services, DevOps tooling, embedded devices, audio and video analysis and transcoding, cryptocurrencies, bioinformatics, search engines, Internet of Things applications, machine learning, and even major parts of the Firefox web browser.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "1g2h3i4j5k6",
    content: "**Open Source Developers**",
    type: "h3",
    meta: null,
  },
  {
    id: "7l8m9n0o1p2",
    content:
      "Rust is for people who want to build the Rust programming language, community, developer tools, and libraries. We’d love to have you contribute to the Rust language.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "3q4r5s6t7u8",
    content: "**People Who Value Speed and Stability**",
    type: "h3",
    meta: null,
  },
  {
    id: "9v0w1x2y3z4",
    content:
      "Rust is for people who crave speed and stability in a language. By speed, we mean both how quickly Rust code can run and the speed at which Rust lets you write programs. The Rust compiler’s checks ensure stability through feature additions and refactoring. This is in contrast to the brittle legacy code in languages without these checks, which developers are often afraid to modify. By striving for zero-cost abstractions, higher-level features that compile to lower-level code as fast as code written manually, Rust endeavors to make safe code be fast code as well.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "5a6b7c8d9e0f",
    content:
      "The Rust language hopes to support many other users as well; those mentioned here are merely some of the biggest stakeholders. Overall, Rust’s greatest ambition is to eliminate the trade-offs that programmers have accepted for decades by providing safety *and* productivity, speed *and* ergonomics. Give Rust a try and see if its choices work for you.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "1g2h3i4j5k6",
    content: "**Who This Book Is For**",
    type: "h2",
    meta: null,
  },
  {
    id: "7l8m9n0o1p2",
    content:
      "This book assumes that you’ve written code in another programming language but doesn’t make any assumptions about which one. We’ve tried to make the material broadly accessible to those from a wide variety of programming backgrounds. We don’t spend a lot of time talking about what programming *is* or how to think about it. If you’re entirely new to programming, you would be better served by reading a book that specifically provides an introduction to programming.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "3q4r5s6t7u8",
    content: "**How to Use This Book**",
    type: "h2",
    meta: null,
  },
  {
    id: "9v0w1x2y3z4",
    content:
      "In general, this book assumes that you’re reading it in sequence from front to back. Later chapters build on concepts in earlier chapters, and earlier chapters might not delve into details on a particular topic but will revisit the topic in a later chapter.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "5a6b7c8d9e0f",
    content:
      "You’ll find two kinds of chapters in this book: concept chapters and project chapters. In concept chapters, you’ll learn about an aspect of Rust. In project chapters, we’ll build small programs together, applying what you’ve learned so far. Chapters 2, 12, and 20 are project chapters; the rest are concept chapters.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "1g2h3i4j5k6",
    content:
      "Chapter 1 explains how to install Rust, how to write a “Hello, world!” program, and how to use Cargo, Rust’s package manager and build tool. Chapter 2 is a hands-on introduction to writing a program in Rust, having you build up a number guessing game. Here we cover concepts at a high level, and later chapters will provide additional detail. If you want to get your hands dirty right away, Chapter 2 is the place for that. Chapter 3 covers Rust features that are similar to those of other programming languages, and in Chapter 4 you’ll learn about Rust’s ownership system. If you’re a particularly meticulous learner who prefers to learn every detail before moving on to the next, you might want to skip Chapter 2 and go straight to Chapter 3, returning to Chapter 2 when you’d like to work on a project applying the details you’ve learned.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "7l8m9n0o1p2",
    content:
      "Chapter 5 discusses structs and methods, and Chapter 6 covers enums, match expressions, and the if let control flow construct. You’ll use structs and enums to make custom types in Rust.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "3q4r5s6t7u8",
    content:
      "In Chapter 7, you’ll learn about Rust’s module system and about privacy rules for organizing your code and its public Application Programming Interface (API). Chapter 8 discusses some common collection data structures that the standard library provides, such as vectors, strings, and hash maps. Chapter 9 explores Rust’s error-handling philosophy and techniques.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "9v0w1x2y3z4",
    content:
      "Chapter 10 digs into generics, traits, and lifetimes, which give you the power to define code that applies to multiple types. Chapter 11 is all about testing, which even with Rust’s safety guarantees is necessary to ensure your program’s logic is correct. In Chapter 12, we’ll build our own implementation of a subset of functionality from the grep command line tool that searches for text within files. For this, we’ll use many of the concepts we discussed in the previous chapters.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "5a6b7c8d9e0f",
    content:
      "Chapter 13 explores closures and iterators: features of Rust that come from functional programming languages. In Chapter 14, we’ll examine Cargo in more depth and talk about best practices for sharing your libraries with others. Chapter 15 discusses smart pointers that the standard library provides and the traits that enable their functionality.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "1g2h3i4j5k6",
    content:
      "In Chapter 16, we’ll walk through different models of concurrent programming and talk about how Rust helps you to program in multiple threads fearlessly. Chapter 17 looks at how Rust idioms compare to object-oriented programming principles you might be familiar with.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "7l8m9n0o1p2",
    content:
      "Chapter 18 is a reference on patterns and pattern matching, which are powerful ways of expressing ideas throughout Rust programs. Chapter 19 contains a smorgasbord of advanced topics of interest, including unsafe Rust, macros, and more about lifetimes, traits, types, functions, and closures.",
    type: "paragraph",
    meta: null,
  },
  {
    id: "3q4r5s6t7u8",
    content: "In Chapter 20, we’ll complete a project in which we’ll implement a low-level multithreaded web server!",
    type: "paragraph",
    meta: null,
  },
  {
    id: "9v0w1x2y3z4",
    content:
      "Finally, this book aims to provide a comprehensive guide to the Rust programming language, allowing you to explore its features and capabilities. Let's embark on this Rust journey together!",
    type: "paragraph",
    meta: null,
  },
  {
    id: "5a6b7c8d9e0f",
    content:
      "There is no wrong way to read this book: if you want to skip ahead, go for it! You might have to jump back to earlier chapters if you experience any confusion. But do whatever works for you.",
    type: "paragraph",
    meta: null,
  },
];
