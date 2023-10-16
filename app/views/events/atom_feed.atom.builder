atom_feed do |feed|
  feed.title "Recent Events"

  @events.each do |event|
    feed.entry event do |entry|
      entry.title event.Event_title
      entry.content event.Description, type: 'html'
      entry.author event.Your_name
      entry.updated event.Date
      entry.id event_url(event)
    end
  end
end
