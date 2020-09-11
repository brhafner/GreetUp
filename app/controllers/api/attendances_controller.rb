class Api::AttendancesController < ApplicationController
    def create
        @attendance = Attendance.new(attendance_params)
        @attendance.user_id = current_user.id
        
        @event = Event.find_by(id: params[:event_id])

        if @attendance.save && !!@event
            render json: @event, status: 200
        else
            render :json ['Attendance FAILED'], status: 422
        end
    end

    def destroy
        @attendance = Attendance.all.where(
            event_id: params[:event_id],
            user_id: current_user.id)

        @event = Event.find_by(id: params[:event_id])

        if @attendance.destroy(@attendance[0].id) && !!@event
            render json: @event, status: 200
        else
            render json: @attendance.errors.full_messages, status: 422
        end
    end

    private
    def attendance_params
        params.permit(:event_id)
    end
end
