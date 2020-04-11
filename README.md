# «Touch Bar Pro» extention for macbook pro

This extension adds a few useful features to your Macbook Pro's touch bar while you are working in VSCode.

Screen examples:
- ![Touchbar Example](images/touch_1.png)
- ![Touchbar Example 2](images/touch_2.png)
- ![Touchbar Example 3](images/touch_3.png)
- ![Touchbar Example 4](images/touch_4.png)
- ![Touchbar Example 5](images/touch_5.png)

Settings example:
```json
{
  "touchBar.foldAll": true
}
```

```json
{
  "touchBar.foldAll": false,
  "touchBar.rename": false,
  "touchBar.copyLinesDownAction": false,
  "touchBar.toggleZenMode": false,
  "touchBar.closeOtherEditors": false,
  "touchBar.dayTheme": "Visual Studio Light",
  "touchBar.nightTheme": "Community Material Theme Darker High Contrast"
}
```

## Alert

You can choose the buttons by adjusting the following settings.
Please bear in mind the limit of 3-8 active buttons.
More than that will break the layout and the buttons will be invisible.

### VScode settings

You can disabled default VScode buttons for more space
```json
{
  "keyboard.touchbar.ignored": [
    "play",
    "workbench.action.debug.start",
    "workbench.action.debug.run"
  ],
}
```

## Settings

You can turn on/off every buttons or group

| Button                                  | Properties                        | Default value | Type    | Groupe      |
| --------------------------------------- | --------------------------------- | ------------- | ------- | ----------- |
| →ƒ Ref                                  | touchBar.goToReferences           | true          | boolean | group_1     |
| ⬓ Term                                  | touchBar.terminal                 | false         | boolean | group_2     |
| ✎ Rename                                | touchBar.rename                   | true          | boolean | group_1     |
| ⤭ Close                                 | touchBar.closeOtherEditors        | true          | boolean | group_2     |
| □ Zen                                   | touchBar.toggleZenMode            | true          | boolean | group_2     |
| ⊙ Target                                | touchBar.showActiveFileInExplorer | false         | boolean | group_2     |
| ⇊ Imports                               | touchBar.organizeImports          | false         | boolean | group_1     |
| ⇠ FoldAll                               | touchBar.foldAll                  | false         | boolean | group_3     |
| ⇢ UnFold                                | touchBar.unfoldAll                | false         | boolean | group_3     |
| ☰↓ Copy                                 | touchBar.copyLinesDownAction      | true          | boolean | group_1     |
|                                         | touchBar.showActivityBar          | false         | boolean |             |
| ![](images/files-activity-bar.png)      | touchBar.showExplorer             | true          | boolean | activityBar |
| ![](images/search-activity-bar.png)     | touchBar.search                   | true          | boolean | activityBar |
| ![](images/scm-activity-bar.png)        | touchBar.scm                      | true          | boolean | activityBar |
| ![](images/debug-activity-bar.png)      | touchBar.debug                    | true          | boolean | activityBar |
| ![](images/extensions-activity-bar.png) | touchBar.extensions               | true          | boolean | activityBar |
| Day / Night                             | touchBar.themeToggle              | false         | boolean | themeToggle |

### Theme preference

| Settings            | Properties          | Default value       | Type   |
| ------------------- | ------------------- | ------------------- | ------ |
| touchBar.dayTheme   | touchBar.dayTheme   | Visual Studio Light | String |
| touchBar.nightTheme | touchBar.nightTheme | Visual Studio Dark  | String |
