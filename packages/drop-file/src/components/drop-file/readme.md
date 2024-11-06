# ip-drop-file



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type     | Default                                                               |
| ----------------- | ------------------- | ----------- | -------- | --------------------------------------------------------------------- |
| `accept`          | `accept`            |             | `string` | `'*/*'`                                                               |
| `downloadLabel`   | `download-label`    |             | `string` | `'Télécharger'`                                                       |
| `fileSize`        | `file-size`         |             | `string` | `'Taille'`                                                            |
| `maxFileSize`     | `max-file-size`     |             | `number` | `20 * 1024 * 1024`                                                    |
| `pauseLabel`      | `pause-label`       |             | `string` | `'Mettre en pause le téléchargement'`                                 |
| `placeholder`     | `placeholder`       |             | `string` | `'Glissez-déposez vos fichiers ici ou cliquez pour les sélectionner'` |
| `removeFileLabel` | `remove-file-label` |             | `string` | `'Supprimer'`                                                         |
| `resumeLabel`     | `resume-label`      |             | `string` | `'Reprendre le téléchargement'`                                       |
| `timeLeft`        | `time-left`         |             | `string` | `'secondes restants'`                                                 |


## Events

| Event          | Description | Type                |
| -------------- | ----------- | ------------------- |
| `fileUploaded` |             | `CustomEvent<File>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
