Meteor.startup(() => {
  const applyThemeStyles = (theme = []) => {
    const rules = [];
    for (const item of theme) {
      rules.push(`
[oo-Color~="back:${item.location}"] {
  background-color: ${item.color} !important;
}

[oo-Color~="border:${item.location}"] {
  border-color: ${item.color} !important;
}

[oo-Color~="text:${item.location}"] {
  color: ${item.color} !important;
}

[oo-Color~="back:${item.location}"][oo-Color~="has-clip"] {
  color: ${item.color} !important;
}
`
      );
    }
    ooInjectStyle(rules, 'colors');
  };

  Tracker.autorun(() => {
    oo.log('cyan', `Session.get('ooTheme')`, Session.get('ooTheme'));
    applyThemeStyles(Session.get('ooTheme'));
  });
});
