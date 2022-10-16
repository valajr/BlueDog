# BlueDog Framework

Sixth project of "In Web One Project Every Two Weeks".

Just a Framework for a simple website with a few resources.

Made in 03/10/2022 ~ 16/10/2022.

[Trello](https://trello.com/b/Ipb4wgcZ/06-projeto-bluedog) of the project (not in english).

<details open>
<summary><b>Table of Contents</b></summary>

  - [Getting Started](#getting-started)
    - [Supported Browsers](#supported-browsers)
  - [Components](#components)
    - [Inputs](#inputs)
    - [Other Elements](#other-elements)
    - [Buttons](#buttons)
    - [Header](#header)
    - [Footer](#footer)
    - [Sidebar](#sidebar)
    - [Login Form](#login-form)
</details>

---

## Getting Started

On your `index.html`, place the `<link>` tag in the `<head>` for use the CSS style, like this example:

`<link rel="stylesheet" href="https://valajr.github.io/BlueDog/import/style.css">`

After that, you can use the styles provided by the Framework just like this [examples](https://valajr.github.io/BlueDog/index.html).

### Supported Browsers

{list of supported browsers}

---

## Colors


---

## Components

To use the visual of the framework on HTML elements you have to add some classes.

### Inputs

Just add the class `"bd-pattern"` to use the pattern on these input elements:
- _Text_;
- _Password_;
- _Number_;
- _Color_;
- _Date_;
- _File_;
- _Search_.

### Other Elements
- _Textarea_: add the class `"bd-pattern"`;
- _Progress_: add the class `"bd-progress"`;
- _Select_: add the class `"bd-pattern"`.

### Buttons

To use add the classes `"bd-btn"` and `"bd-btn-<type of button>"`, being type one of the following:

- _Standard_: a button without border that has a medium tone background, a shadow to make a effect of neumorphism, when clicked will invert the shadows to do the impression of depth and when the mouse was hover it the color will be a little darker;
- _Outline_: a button with a darker border and transparent background, a shadow to make a effect of neumorphism, when clicked will invert the shadows to do the impression of depth and when the mouse was hover it the color will be a little darker;
- _Link_: a button without border or background and will underline the text when you hover it;
- _Transparent_: a button without border or background and with a white text on it; when disabled the text will change to grey;
- _Small_: a modifier to make the font size smaller;
- _Group_: a modifier to agroup buttons;
- _Selected_: a modifier to make the color of text grey.

The buttons have support to be disabled, making them non-interactables and a little opaque.

The _small_, _group_ and _selected_ buttons will work with any other class of button combined.

### Header

The header has the classes `"bd-header"`, `"bd-header-content"` and `"bd-header-buttons"` that are to be included on the respectively elements HTML: header, content of header and the buttons.

### Sidebar

The sidebar has the classes `"bd-sidebar"`, `"bd-sidebar-content"` and `"bd-sidebar-user"` that are to be included on the respectively elements HTML: the div that contains the sidebar, the elements contained in the sidebar and the informations of User.

### Footer

The sidebar has the classes `"bd-footer"`, `"bd-footer-logo"` and `"bd-footer-content"` that are to be included on the respectively elements HTML: the footer, the elements like logo, copyright, etc. and the content of footer like social media or contact info.

### Login Form

The login form has the classes `"bd-form-login"` and `"bd-login-content"` that are to be included on the respectively elements HTML: the form that contains the login elements and the content of login, like the inputs and buttons needed.