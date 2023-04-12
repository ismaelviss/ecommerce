package com.rappi.pay.coca.common.mapper

import com.rappi.pay.coca.common.request.CancelRequest
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mapstruct.factory.Mappers

class CancelRequestMapperTest {

    private lateinit var cancelRequestMapper: CancelRequestMapper

    @BeforeEach
    fun setup() {
        cancelRequestMapper = Mappers.getMapper(CancelRequestMapper::class.java)
    }

    @Test
    fun test_mapCancelRequestToCancelRequestDto() {
        val bank = "CUD"
        val comment = "prueba elvis 3"
        val email = "elvis.salvatierra@rappi.com"
        val fullName = "Elvis Salvatierra"
        val profile = "maker"

        val cancelRequest = CancelRequest(
            comment = comment, bank = bank
        )

        val cancelRequestDto = cancelRequestMapper.mapCancelRequestToCancelRequestDto(cancelRequest, email, fullName, profile)

        assertThat(cancelRequestDto).isNotNull
        assertThat(cancelRequestDto.comment).isEqualTo(comment)
        assertThat(cancelRequestDto.email).isEqualTo(email)
        assertThat(cancelRequestDto.fullName).isEqualTo(fullName)
        assertThat(cancelRequestDto.profile).isEqualTo(profile)
        
    }
}