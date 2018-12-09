package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Reservation;

public interface ReservationMapper {
    int deleteByPrimaryKey(Integer reservationid);

    int insert(Reservation record);

    int insertSelective(Reservation record);

    Reservation selectByPrimaryKey(Integer reservationid);

    int updateByPrimaryKeySelective(Reservation record);

    int updateByPrimaryKey(Reservation record);
}