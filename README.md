# cookie-consent
banner for cookies law

## Installation
install via npm package manager.

```bash
npm install @ildug/cookie-consent
```

## Import 
Import into each html page the main script.

```html
<script src="/dist/cookie-consent-bundle.js" ></script>
```

as well css styles:
```html
 <link rel="stylesheet" href="/dist/cookie-consent.css">
```

## Block Scripts
Any script that can write cookies must be blocked. 

STEP1: replace type.

- Simply replace attribute *text/javascript*  with *text/plain*

STEP2: bind to a selected categories.

There is some main categories that the user can be select as preferences:
 - technical **(always active)**
 - functional
 - performance
 - targeting
 - social

Add attribute ```dcc``` to each blocked script in order to apply the user preferences.
Example:
```html
    <script src="/my-script.js" type="text/plain" dcc-script="technical"></script>

or

    <script type="text/plain" dcc-script="functional">
        alert("Hello World")
    </script>
```

### Behaviour

The script run on windows load. Then check if preferences cookie is present. If not, diplay the banner.

## Open prefences
To open consent preferences,  you must place a link with attributes *```dcc-open```*:
```html
<p>
    <a href="#" dcc-open>opens cookie settings</a>
</p>
```


## Configuration and prefences
TO DO.

