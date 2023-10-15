class EventsController < ActionController::Base
    
    # for adding events
    def create
        @event = Event.new(event_params)
        if @event.save
            redirect_to @event, notice: 'Cool! Event was successfully created.'
        else
            render :new
        end
    end
      
    private
      
    def event_params
        params.require(:event).permit(:Your_name, :Event_title, :Date, :Description)
    end

    # ATOM generation
    def atom_feed
        @events = Event.all
        respond_to do |format|
            format.atom { render :layout => false }
        end
    end

end    

