async function setRespondMsg(res, code, msg) {
    // res.statusMessage = msg
    await res.status(code).send(msg)
    return res
}

module.exports={setRespondMsg};