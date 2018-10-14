NEEO Driver - MQTT Textlabels
=====

This driver takes a MQTT topic/textlabel mapping and exposes these textlabels to the NEEO Brain. Every time a messages come in on this topic, it will update the specific textlabel.

Configuring / Setup
----

You will need to create a mapping between the MQTT topic to listen for and the label to update. Therefore please copy the config file and adjust it:

```
$ cp config.sample.json config.json
```

and then also install the dependencies:

```
$ npm install
```