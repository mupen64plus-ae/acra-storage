function(doc) {
    if(doc.SIGNATURE && doc.SIGNATURE.digest) {
        emit(doc.SIGNATURE.digest, 1);
    }
}