function Log(e){
	var _log = function(){console.log(e)}; 
	_log(e);
}

function start(e){
	if(!e){
		e = "none";
		console.log(e);
	}
	else{
		console.log(e);
	}
}

/*

/Users/<USERNAME>/.rvm/gems/ruby-2.1.0/gems/safe_yaml-1.0.4/lib/safe_yaml/psych_resolver.rb:4:in `<class:PsychResolver>': uninitialized constant Psych::Nodes (NameError)
	from /Users/<USERNAME>/.rvm/gems/ruby-2.1.0/gems/safe_yaml-1.0.4/lib/safe_yaml/psych_resolver.rb:2:in `<module:SafeYAML>'
	from /Users/<USERNAME>/.rvm/gems/ruby-2.1.0/gems/safe_yaml-1.0.4/lib/safe_yaml/psych_resolver.rb:1:in `<top (required)>'
	from /Users/<USERNAME>/.rvm/rubies/ruby-2.1.0/lib/ruby/site_ruby/2.1.0/rubygems/core_ext/kernel_require.rb:69:in `require'
	from /Users/<USERNAME>/.rvm/rubies/ruby-2.1.0/lib/ruby/site_ruby/2.1.0/rubygems/core_ext/kernel_require.rb:69:in `require'
	from /Users/<USERNAME>/.rvm/gems/ruby-2.1.0/gems/safe_yaml-1.0.4/lib/safe_yaml/load.rb:131:in `<module:SafeYAML>'
	from /Users/<USERNAME>/.rvm/gems/ruby-2.1.0/gems/safe_yaml-1.0.4/lib/safe_yaml/load.rb:26:in `<top (required)>'
	from /Users/<USERNAME>/.rvm/rubies/ruby-2.1.0/lib/ruby/site_ruby/2.1.0/rubygems/core_ext/kernel_require.rb:69:in `require'
	from /Users/<USERNAME>/.rvm/rubies/ruby-2.1.0/lib/ruby/site_ruby/2.1.0/rubygems/core_ext/kernel_require.rb:69:in `require'
	from /Users/<USERNAME>/.rvm/gems/ruby-2.1.0/gems/jekyll-2.5.3/lib/jekyll.rb:26:in `<top (required)>'
	from /Users/<USERNAME>/.rvm/rubies/ruby-2.1.0/lib/ruby/site_ruby/2.1.0/rubygems/core_ext/kernel_require.rb:69:in `require'
	from /Users/<USERNAME>/.rvm/rubies/ruby-2.1.0/lib/ruby/site_ruby/2.1.0/rubygems/core_ext/kernel_require.rb:69:in `require'
	from /Users/<USERNAME>/.rvm/gems/ruby-2.1.0/gems/jekyll-2.5.3/bin/jekyll:6:in `<top (required)>'
	from /Users/<USERNAME>/.rvm/gems/ruby-2.1.0/bin/jekyll:23:in `load'
	from /Users/<USERNAME>/.rvm/gems/ruby-2.1.0/bin/jekyll:23:in `<main>'
	from /Users/<USERNAME>/.rvm/gems/ruby-2.1.0/bin/ruby_executable_hooks:15:in `eval'
	from /Users/<USERNAME>/.rvm/gems/ruby-2.1.0/bin/ruby_executable_hooks:15:in `<main>'

	---

	Regenerating: 1 file(s) changed at 2015-02-27 13:28:06 Error reading file /Users/<USERNAME>/github/blog/_posts/<POSTNAME>.markdown: (<unknown>): mapping values are not allowed in this context at line 3 column 26 

	*/