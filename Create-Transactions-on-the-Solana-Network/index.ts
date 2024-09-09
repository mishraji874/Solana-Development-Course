const transaction = new Transaction();

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: sender,
    toPubkey: recipient,
    lamports: LAMPORTS_PER_SOL * amount,
});

transaction.add(sendSolInstruction);

const signature = sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
]);

await airdropIfRequired(
    connection,
    keypair.publicKey,
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL,
);