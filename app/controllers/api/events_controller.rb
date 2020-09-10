class Api::EventsController < ApplicationController

    def index
        @events = Event.all
        render :index
    end

    def show
        @event = Event.find_by(id: params[:id])
        # .with_attached_photos
        render :show
    end

    def create
        @event = Event.new(event_params)
        @event.host_id = current_user.id
        add_template_photo(@event) unless @event.photo.attached? 
        # debugger
        if @event.save
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.find_by(id: params[:event][:id])
        @event.host_id = current_user.id
        debugger
        if @event.update(event_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 422 
        end
    end

    def destroy
        @event = Event.find_by(id: params[:id])
        if @event.destroy
            render json: ["Event Deleted"], status: 200
        else
            render json: @event.errors.full_messages, status: 422 
        end
    end

    private
    def event_params
        params.require(:event).permit(:id, :name, :details, :day, :start_time, :duration, :digital, :address, :group_id, :photo)
    end

    def add_template_photo(event)
        file = File.open('app/assets/images/image_icon.png')
        event.photo.attach(io: file, filename: 'image_icon.png')
    end
end

# template image icon credit: https://www.iconfinder.com/Myart